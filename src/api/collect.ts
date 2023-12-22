import { getIdToken } from "@/api/auth"
import { showNotify, showDialog } from "vant"

const collectPoints = async (trashCanId: string) => {
    console.log(`${import.meta.env.VITE_API_URL}/user/point/throwing/trash_can/${trashCanId}`)
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/point/throwing/trash_can/${trashCanId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getIdToken()}`,
            },
        }
    )

    // if (!response.ok) {
    //     showNotify({ type: "warning", message: "取得點數失敗，請稍後再試...", duration: 2000 })
    //     return
    // }

    const parsed = (await response.json()) as any

    if (!parsed.success) {
        showNotify({ type: "danger", message: parsed.error, duration: 2000 })
        return
    }

    showDialog({
        title: "成功取得點數",
        message: "將重新導向紀錄頁面...",
        theme: "round-button",
        confirmButtonText: "確定",
    }).then(() => {
        window.location.href = "/record"
    })
}

export { collectPoints }
