<template>
    <div id="reader" style="width: 100vw"></div>
</template>
<script setup lang="ts">
import { Html5Qrcode } from "html5-qrcode"
import { onMounted, onUnmounted } from "vue"
import { showNotify } from "vant"

const emit = defineEmits(["detect"])

let html5QrCode: Html5Qrcode
const config = { fps: 10, qrbox: { width: 250, height: 250 } }

const qrCodeErrorCallback = (error: any) => {
    // console.error(error)
    // showNotify({ type: "danger", message: error })
}

const qrCodeSuccessCallback = async (decodedText: string) => {
    html5QrCode.pause()
    // console.log(decodedText)

    emit("detect", {
        decodedText: decodedText,
        resume: () => html5QrCode.resume(),
    })
}

onMounted(() => {
    html5QrCode = new Html5Qrcode("reader")
    html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback, qrCodeErrorCallback)
})

onUnmounted(async () => {
    try {
        await html5QrCode?.stop()
    } catch (error) {
        console.error(error)
    }
})
</script>
