<template>
  <div>
    <div :style="{
      margin: '10px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'greenyellow'
    }">
      <h1>App1</h1>
    </div>
    <RemoteApp />
  </div>
</template>

<script setup>
// import { defineAsyncComponent } from 'vue';
import RemoteApp from 'app2/App';

// const RemoteApp = defineAsyncComponent(() => import("app2/App"));
</script>
