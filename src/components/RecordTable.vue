<template>
    <van-space class="record-container" direction="vertical" fill>
        <RecordCard
            v-for="record in records"
            :key="record.id"
            :id="record.id"
            :detectResult="record.detectResult"
            :labelResult="record.labelResult"
            :location="record.location"
            :imageUrl="record.imageUrl"
            :timestamp="record.timestamp"
            :hasReport="hasReport"
        />
    </van-space>
</template>
<script setup lang="ts">
import RecordCard from "@/components/RecordCard.vue"

const props = defineProps({
    records: {
        type: Array as () => DetectRecord[],
        default: () => [],
    },
    hasReport: {
        type: Boolean,
        default: false,
    },
})
</script>
<style scoped>
.record-container {
    background-color: #f7f8fa;
    border-radius: 20px;
}
</style>
