<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <van-config-provider theme="light">
    <div class="container">
      <RouterView />
    </div>
  </van-config-provider>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 600px;
  height: 100vh;
  background-color: var(--van-background);
}
</style>
