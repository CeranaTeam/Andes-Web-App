<template>
    <van-space direction="vertical" class="login-wrapper" align="center">
        <h1 style="margin-top: 30vh">Smart Bin</h1>
        <van-form class="login-form" @submit="handleLogin">
            <van-cell-group inset>
                <van-field
                    v-model="email"
                    name="Email"
                    label="Email"
                    placeholder="Email"
                    :rules="[{ required: true, message: 'Email is required' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="Password"
                    label="Password"
                    placeholder="Password"
                    :rules="[{ required: true, message: 'Password is required' }]"
                />
            </van-cell-group>
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit"> Login </van-button>
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
