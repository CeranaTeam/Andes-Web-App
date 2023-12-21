import { showNotify } from "vant"

const getIdToken = () => localStorage.getItem("token") ?? ""

const signIn = async (email: string, password: string) => {
    // console.log(`${import.meta.env.VITE_API_URL}/user/signin`)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })

    // console.log(response)

    if (!response.ok) {
        showNotify({ type: "warning", message: "Sign in failed", duration: 2000 })
        return false
    }

    const parsed = (await response.json()) as any

    console.log(parsed)
    if (parsed.success) {
        showNotify({ type: "success", message: "Sign in successfully", duration: 2000 })
    } else {
        showNotify({ type: "danger", message: parsed.error, duration: 2000 })
        return false
    }

    localStorage.setItem("token", parsed.data.token)
    return true
}

const signOut = async () => {
    localStorage.removeItem("token")
}

export { getIdToken, signIn, signOut }
