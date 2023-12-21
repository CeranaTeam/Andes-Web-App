<template>
    <van-card class="record-card" :title="location" :thumb="imageUrl">
        <template #desc>
            <span>
                時間：<br />
                {{ timestamp.toLocaleDateString("zh-TW", options) }}
                {{ toTimeString(timestamp) }}
            </span>
            <br />
            <span>
                偵測分類：
                <van-tag plain type="success">{{ detectResult }} </van-tag>
            </span>
            <br />
            <span v-if="labelResult !== ''">
                更正分類：
                <van-tag plain type="warning"> {{ labelResult }} </van-tag>
            </span>
        </template>
        <template #num>
            <van-button
                v-if="hasReport"
                :disabled="labelResult != ''"
                type="primary"
                size="small"
                @click="gotoDetail"
            >
                {{ labelResult == "" ? "回報問題" : "已回報" }}
            </van-button>
        </template>
    </van-card>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"

const props = defineProps({
    id: String,
    detectResult: String,
    labelResult: String,
    location: String,
    imageUrl: String,
    timestamp: {
        type: Date,
        required: true,
    },
    hasReport: {
        type: Boolean,
        default: false,
    },
})

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}

const toTimeString = (date: Date) => {
    let hours = date.getHours().toString().padStart(2, "0")
    let minutes = date.getMinutes().toString().padStart(2, "0")
    let seconds = date.getSeconds().toString().padStart(2, "0")
    return hours + ":" + minutes + ":" + seconds
}

const router = useRouter()
const gotoDetail = () => {
    router.push({ path: `/record/${props.id}` })
}
</script>
<style scoped>
.record-card {
    margin: 2px 20px;
    background-color: white;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
