<template>
    <div>
        <van-nav-bar title="回報頁面" left-text="上一頁" left-arrow @click-left="onClickLeft" />
        <van-space class="record-detail-wrapper" direction="vertical">
            <van-image
                v-if="currentRecord?.imageUrl"
                width="100%"
                height="200px"
                fit="contain"
                :src="currentRecord?.imageUrl"
            />
            <van-cell title="地點" :value="currentRecord?.location" />
            <van-cell title="拍攝時間" :value="currentRecord?.timestamp.toLocaleString()" />
            <van-cell title="偵測結果" :value="currentRecord?.detectResult" />
            <van-field
                v-model="labelResult"
                readonly
                center
                clearable
                label="修正結果"
                placeholder="在下方選擇您認為的正確結果"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="handleReport">回報</van-button>
                </template>
            </van-field>
            <van-radio-group v-model="labelResult">
                <van-cell-group inset>
                    <van-cell title="一般垃圾" clickable @click="labelResult = '一般垃圾'">
                        <template #right-icon>
                            <van-radio name="一般垃圾" />
                        </template>
                    </van-cell>
                    <van-cell title="紙類" clickable @click="labelResult = '紙類'">
                        <template #right-icon>
                            <van-radio name="紙類" />
                        </template>
                    </van-cell>
                    <van-cell title="塑膠" clickable @click="labelResult = '塑膠'">
                        <template #right-icon>
                            <van-radio name="塑膠" />
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
            <div style="height: 50px" />
        </van-space>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router"
import { records } from "@/composables/useRecords"
import { showFailToast } from "vant"
import { reportLabelResult } from "@/api/report"

let currentRecord = ref<DetectRecord>()
onMounted(() => {
    currentRecord.value = records.value.find((record) => record.id === id) ?? {
        id: "0",
        location: "",
        imageUrl: "",
        timestamp: new Date(),
        detectResult: "",
        labelResult: "",
    }

    if (currentRecord.value.id !== "0") {
        localStorage.setItem("currentRecord", JSON.stringify(currentRecord.value))
    } else {
        currentRecord.value = JSON.parse(localStorage.getItem("currentRecord") ?? "{}")
    }
})

const onClickLeft = () => history.back()

const id = useRoute().params.id
const labelResult = ref("")

const handleReport = async () => {
    if (!currentRecord.value || labelResult.value === "") {
        showFailToast("請選擇分類")
        return
    }

    try {
        await reportLabelResult(currentRecord.value.id, labelResult.value)
    } catch (error) {
        // showFailToast("回報失敗")
    }
}
</script>
<style scoped>
.record-detail-wrapper {
    margin-top: 10px;
    width: 100vw;
    height: 100%;
    overflow: auto;
}
</style>
