<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import Header from './components/Header.vue';

</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  main {
    flex-grow: 1;
    width: 100%;
    margin-top: 24px;
  }
</style>
