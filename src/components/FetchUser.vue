<template>
  <div>
    <h2>Fetch User</h2>
    
    <input v-model.number="id" type="number" />
    
    <button @click="loadUser">Load</button>
    <pre v-if="user">{{ user }}</pre>
    
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fetchUser } from "../effects/fetchUser";
import { Effect } from "effect";

const id = ref(1);
const user = ref<any>(null);
const error = ref<string | null>(null);

const loadUser = () => {
  error.value = null;
  user.value = null;

  const program = fetchUser(id.value).pipe(
    Effect.catchTag('UserNotFoundError', (e) => {
      console.error(e);

      return Effect.succeed(`User ${e.userId} not found`);
    }),

    Effect.catchTag('NetworkError', (e) => {
      console.error(e);

      return Effect.succeed(e.cause);
    }),
  );

  Effect.runPromise(program).then(
    (data) => (user.value = JSON.stringify(data, null, 2)),
    (err) => (error.value = err.message)
  );
};
</script>
