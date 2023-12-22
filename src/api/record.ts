import { getIdToken } from "@/api/auth"
import { showNotify } from "vant"

const getRecords = async (): Promise<DetectRecord[]> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/image/list`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getIdToken()}`,
        },
    })

    if (!response.ok) {
        showNotify({ type: "warning", message: "取得紀錄失敗，請稍後再試...", duration: 2000 })
        return []
    }

    const parsed = (await response.json()) as any

    if (!parsed.success) {
        showNotify({ type: "danger", message: parsed.error, duration: 2000 })
        return []
    }

    const records = parsed.data.map((record: any) => {
        return {
            id: record._id,
            detectResult: record.detectResult.label,
            labelResult: record.labelResult.label,
            imageUrl: `${import.meta.env.VITE_API_URL}${record.imageUrl}`,
            timestamp: new Date(record.createdAt),
            point: record.point,
            location: record.trashCanLocation,
        }
    })

    return records.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

export { getRecords }
