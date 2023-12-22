<template>
    <van-card class="exchange-card" :desc="desc" :thumb="imgUrl">
        <template #title>
            <h3 style="margin-top: 5px; margin-bottom: 5px">{{ title }}</h3>
        </template>
        <template #num>
            <van-button size="small" @click="onExchange">兌換({{ point }}p)</van-button>
        </template>
    </van-card>
</template>
<script setup lang="ts">
import { showConfirmDialog, showDialog } from "vant"
const props = defineProps({
    title: String,
    desc: String,
    point: String,
    imgUrl: String,
})

const onExchange = () => {
    showConfirmDialog({
        title: "確認兌換？",
        message: `您將使用 ${props.point} 點兌換， ${props.title}，請確認是否兌換？`,
        confirmButtonText: "確認",
                cancelButtonText: "取消",
    })
        .then(() => {
            showDialog({
                message: "兌換成功，請至兌換紀錄查看，並至兌換地點取得禮券。",
                theme: "round-button",
                confirmButtonText: "確認",
            })
        })
        .catch(() => {
            // on cancel
        })
}
</script>
<style scoped>
.exchange-card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin: 0px 20px;
}
</style>
