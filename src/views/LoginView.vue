<template>
    <van-space direction="vertical" class="login-wrapper" align="center">
        <h1 style="margin-top: 30vh">Smart Bin</h1>
        <van-form class="login-form" @submit="handleLogin">
            <van-cell-group inset>
                <van-field
                    v-model="email"
                    name="Email"
                    label="電子郵件"
                    placeholder="輸入電子郵件"
                    :rules="[{ required: true, message: '不能為空' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="Password"
                    label="密碼"
                    placeholder="輸入密碼"
                    :rules="[{ required: true, message: '不能為空' }]"
                />
            </van-cell-group>
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit"> 登入 </van-button>
            </div>
            <div style="margin: 16px">
                <van-button
                    round
                    plain
                    type="primary"
                    icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
                    hairline
                    @click="router.push('/register')"
                >
                    還沒帳號？點此註冊
                </van-button>
            </div>
        </van-form>
    </van-space>
</template>
<script setup lang="ts">
import { signIn, signOut } from "@/api/auth"
import router from "@/router"

onMounted(() => signOut())

const email = ref("")
const password = ref("")

const handleLogin = async () => {
    if (!email.value || !password.value) return

    console.log("email", email.value)
    console.log("password", password.value)

    try {
        const isLogin = await signIn(email.value, password.value)

        if (isLogin) {
            router.push("/home")
        }
    } catch (error) {
        console.log(error)
    }
}
</script>
<style scoped>
.login-wrapper {
    height: 100%;
    /* width: 100vw; */
    margin: auto;
}
.login-form {
    width: 100vw;
}
.btn-login {
    margin: auto;
    max-width: 300px;
}
</style>
