import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "登入",
            component: () => import("@/views/LoginView.vue"),
        },
        {
            path: "/register",
            name: "註冊",
            component: () => import("@/views/RegisterView.vue"),
        },
        {
            path: "/home",
            name: "主頁",
            component: () => import("@/views/HomeView.vue"),
        },
        {
            path: "/scan",
            name: "掃描",
            component: () => import("@/views/ScanView.vue"),
        },
        {
            path: "/exchange",
            name: "兌換",
            component: () => import("@/views/ExchangeView.vue"),
        },
        {
            path: "/record",
            name: "回收紀錄",
            component: () => import("@/views/RecordView.vue"),
        },
        {
            path: "/record/:id",
            name: "回收內容",
            component: () => import("@/views/RecordDetailView.vue"),
        }
    ],
})

export default router
