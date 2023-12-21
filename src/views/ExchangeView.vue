<template>
    <van-space direction="vertical" fill>
        <van-nav-bar title="兌換獎品" right-text="目前禮卷" />
        <ExchangeItemCard
            v-for="item in items"
            :key="item.id"
            :title="item.title"
            :desc="item.desc"
            :point="item.point"
            :img="item.img"
        >
        </ExchangeItemCard>
    </van-space>
</template>
<script setup lang="ts">
import ExchangeItemCard from "@/components/ExchangeItemCard.vue"

const items = [
    {
        id: "1",
        title: "XX 超商 100 元禮券",
        desc: "可用於 XX 超商購買商品，不可兌換現金",
        point: "200",
        img: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
    },
    {
        id: "2",
        title: "XX 披薩買大送小",
        desc: "可用於 XX 披薩購買商品，不可兌換現金",
        point: "100",
        img: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
    },
    {
        id: "3",
        title: "XX 書局鉛筆兌換卷",
        desc: "可用於 XX 書局購買商品，不可兌換現金",
        point: "50",
        img: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
    },
]
</script>
