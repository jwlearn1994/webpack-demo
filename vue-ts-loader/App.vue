<template>
  <img src="/logo.png" />
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref<string>('Vue Application')
</script>

<style>
#app {
  margin-top: 60px;
  text-align: center;
}
</style>
