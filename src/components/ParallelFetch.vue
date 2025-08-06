<template>
  <div>
    <h2>Parallel Fetch (concurrency=2)</h2>
    
    <button @click="runTasks">Run</button>

    <pre v-if="result">{{ result }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { parallelFetch } from "../effects/parallelFetch";
import { Effect } from "effect";

const result = ref<string | null>(null);

const runTasks = () => {
  Effect.runPromise(parallelFetch()).then((res) => {
    result.value = JSON.stringify(res, null, 2);
  });
};
</script>
