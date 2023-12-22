<template>
    <div class="qr-code-wrapper">
        <h3>掃描 Smart Bin 上面的 QRCode 取得點數</h3>
        <QRCodeReader @detect="onDetect" />
        <div style="height: 40px" />
    </div>
</template>
<script setup lang="ts">
import QRCodeReader from "@/components/QRCodeReader.vue"
import { collectPoints } from "@/api/collect"
import { showNotify } from "vant"

const onDetect = async ({ decodedText, resume }: any) => {
    console.log(decodedText)
    try {
        await collectPoints(decodedText)
    } catch (error) {
        showNotify({
            type: "danger",
            message: "發送請求失敗，可能你掃的不是我們的 QRCode。",
            confirmButtonText: "確定",
        })
    }

    setTimeout(resume, 1000)
}
</script>
<style scoped>
.qr-code-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
}
</style>
