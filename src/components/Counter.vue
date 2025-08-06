<template>
  <div>
    <h2>Counter: {{ value }}</h2>
    <button @click="update(increment)">+1</button>
    <button @click="update(decrement)">-1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { increment, decrement, getCount } from "../effects/counter";
import { Effect } from "effect";

const value = ref<number>(0);

const update = (eff: Effect.Effect<number, never, never>) => {
  Effect.runPromise(eff).then((v) => (value.value = v));
};

Effect.runPromise(getCount).then((v) => (value.value = v));
</script>
