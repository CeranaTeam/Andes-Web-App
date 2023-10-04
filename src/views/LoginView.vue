<template>
  <div class="container">
    <van-button class="btn-login" type="primary" size="large" @click="handleLogin">
      Login
    </van-button>
  </div>
</template>
<script setup lang="ts">
import { signIn } from '@/api/firebase'
import router from '@/router'

const handleLogin = async () => {
  await signIn()
  router.push('/home')
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
.btn-login {
  margin: auto;
  max-width: 300px;
}
</style>
