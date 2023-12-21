import { showNotify } from "vant"
import { getIdToken } from "@/api/auth"

const getPoints = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/point`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getIdToken()}`,
        },
    })

    if (!response.ok) {
        showNotify({
            type: "danger",
            message: "取得點數失敗",
        })
        return 0
    }

    const parsed = await response.json()

    console.log(parsed)

    if (!parsed.success) {
        showNotify({
            type: "danger",
            message: parsed.error,
        })
        return 0
    }

    return parsed.data.point
}

export { getPoints }
