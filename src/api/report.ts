import { showDialog } from "vant"
import { getIdToken } from "./auth"

const reportLabelResult = async (detectRecordId: string, label: string) => {
    const reponse = await fetch(
        `${import.meta.env.VITE_API_URL}/user/image/${detectRecordId}/label`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getIdToken()}`,
            },
            body: JSON.stringify({
                label,
            }),
        }
    )

    if (!reponse.ok) {
        showDialog({ message: "網路錯誤，請稍後再試...", confirmButtonText: "確定" })
        return
    }

    const parsed = await reponse.json()
    if (!parsed.success) {
        showDialog({ message: parsed.error, confirmButtonText: "確定" })
        return
    }

    showDialog({ title: "回報成功", message: "獲得獎勵 5 點", confirmButtonText: "確認" }).then(
        () => {
            history.back()
        }
    )
}

export { reportLabelResult }
