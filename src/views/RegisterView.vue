<template>
    <van-space direction="vertical" class="login-wrapper" align="center">
        <h1 style="margin-top: 30vh">Smart Bin</h1>
        <van-form class="login-form" @submit="handleRegister">
            <van-cell-group inset>
                <van-field
                    v-model="name"
                    name="name"
                    label="使用者名稱"
                    placeholder="輸入使用者名稱"
                    :rules="[{ required: true, message: '不能為空' }]"
                />
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
                <van-field
                    v-model="checkPassword"
                    type="password"
                    name="CheckPassword"
                    label="確認密碼"
                    placeholder="重新輸入密碼"
                    :rules="[{ required: true, message: 'Password is required' }]"
                />
            </van-cell-group>
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit"> 註冊 </van-button>
            </div>
            <div style="margin: 16px">
                <van-button
                    round
                    plain
                    type="primary"
                    icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
                    hairline
                    @click="router.push('/')"
                >
                    有帳號？點此登入
                </van-button>
            </div>
        </van-form>
    </van-space>
</template>
<script setup lang="ts">
import { signUp, signOut } from "@/api/auth"
import router from "@/router"

onMounted(() => signOut())

const name = ref("")
const email = ref("")
const password = ref("")
const checkPassword = ref("")

const handleRegister = async () => {
    if (!name.value || !email.value || !password.value || !checkPassword.value) return

    // console.log("email", email.value)
    // console.log("password", password.value)

    try {
        // const isLogin = await signIn(email.value, password.value)
        const isLogin = await signUp(name.value, email.value, password.value)

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
