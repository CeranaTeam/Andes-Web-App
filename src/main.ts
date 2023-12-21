import { createApp } from "vue"
import App from "./App.vue"
import { Notify } from "vant"
import router from "./router"
import "@/assets/main.css"

import "vant/es/notify/style"
import "vant/es/dialog/style"
import "vant/es/toast/style"

const app = createApp(App)

app.use(router)
app.use(Notify)

app.mount("#app")
