<script setup lang="ts">
import { useRoute, useRouter, RouterView } from "vue-router"

const route = useRoute()
// const router = useRouter()
// const handleSwitchTabs = path: string) => {
//     router.push({path })
// }
</script>

<template>
    <van-config-provider theme="light">
        <div class="container">
            <RouterView />
            <van-tabbar v-if="route.path != '/' && route.path != '/register'" route>
                <van-tabbar-item replace to="/home" icon="home-o">主頁</van-tabbar-item>
                <van-tabbar-item replace to="/scan" icon="scan">取得點數</van-tabbar-item>
                <van-tabbar-item replace to="/exchange" icon="coupon-o">兌換</van-tabbar-item>
                <van-tabbar-item replace to="/record" icon="todo-list-o">紀錄</van-tabbar-item>
            </van-tabbar>
        </div>
    </van-config-provider>
</template>

<style scoped>
.container {
    margin: auto;
    max-width: 600px;
    height: 100vh;
    background-color: var(--van-background);
}
</style>
