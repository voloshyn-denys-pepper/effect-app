<template>
  <h1>Reactive UI State with Effect</h1>
  <Counter />
  <FetchUser />
  <ParallelFetch />
</template>

<script setup lang="ts">
import Counter from "./components/Counter.vue"
import FetchUser from "./components/FetchUser.vue";
import ParallelFetch from "./components/ParallelFetch.vue";
</script>