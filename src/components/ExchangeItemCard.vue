<template>
    <van-card
        class="exchange-card"
        :desc="desc"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
        <template #title>
            <h3 style="margin-top: 5px; margin-bottom: 5px">{{ title }}</h3>
        </template>
        <template #num>
            <van-button size="small">兌換({{ point }}p)</van-button>
        </template>
    </van-card>
</template>
<script setup lang="ts">
defineProps({
    title: String,
    desc: String,
    point: String,
    img: String,
})
</script>
<style scoped>
.exchange-card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin: 0px 20px;
}
</style>
