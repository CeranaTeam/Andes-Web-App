<template>
    <div>
        <van-search v-model="search" shape="round" placeholder="搜尋紀錄" />
        <van-pull-refresh class="record-wrapper" v-model="loading" @refresh="onRefresh">
            <RecordTable :records="filteredRecords" has-report> </RecordTable>
        </van-pull-refresh>
    </div>
</template>
<script setup lang="ts">
import { records } from "@/composables/useRecords"
import { getRecords } from "@/api/record"

const search = ref("")

onMounted(async () => {
    records.value = await getRecords()
})

const filteredRecords = computed(() => {
    return records.value.filter((record) => {
        return record.location.includes(search.value)
    })
})

const loading = ref(false)
const onRefresh = async () => {
    loading.value = true
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(null)
        }, 1000)
    })
    loading.value = false
}
</script>
<style scoped>
.record-wrapper {
    margin-top: 10px;
    height: 100%;
    overflow: auto;
}
</style>
