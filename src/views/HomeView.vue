<template>
    <div class="home-wrapper">
        <div class="point-count">
            <h2>目前點數</h2>
            <van-rolling-text
                class="point-rolling-text"
                :start-num="0"
                :target-num="currentPoints"
            />
        </div>
        <div class="record-section">
            <h2 style="padding-left: 40px">最近紀錄</h2>
            <RecordTable :records="records" />
        </div>
        <div class="sign-out-button">
            <van-button size="small" round block @click="handleSignOut">登出</van-button>
        </div>
        <div style="height: 60px" />
    </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"
import { signOut } from "@/api/auth"
import { getPoints } from "@/api/points"
import { getRecords } from "@/api/record"
import { records } from "@/composables/useRecords"

const currentPoints = ref(0)
onMounted(async () => {
    currentPoints.value = await getPoints()
    records.value = await getRecords()
})

const router = useRouter()
const handleSignOut = () => {
    signOut()
    router.push({ path: "/" })
}
</script>
<style scoped>
.home-wrapper {
    height: 100%;
    overflow: auto;
}
.point-count {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
}

.record-section {
    margin-top: 10px;
    font-size: 20px;
    /* text-align: center; */
}

.sign-out-button {
    margin: 20px;
    font-size: 20px;
    text-align: center;
}

.point-rolling-text {
    --van-rolling-text-background: #1989fa;
    --van-rolling-text-color: white;
    --van-rolling-text-font-size: 24px;
    --van-rolling-text-gap: 6px;
    --van-rolling-text-item-border-radius: 5px;
    --van-rolling-text-item-width: 40px;
}
</style>
