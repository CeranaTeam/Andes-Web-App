<template>
  <div>
    <van-field :model-value="user?.displayName" label="user" placeholder="UserName" />
    <van-field
      v-model="idToken"
      rows="2"
      autosize
      label="idToken"
      type="textarea"
      maxlength="2000"
      placeholder="token"
      show-word-limit
    />
  </div>
</template>
<script setup lang="ts">
import { user, idToken } from '@/composables/useUser'
</script>
