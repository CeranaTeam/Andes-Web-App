type GenericResponse<T> = {
    success: boolean
    error?: string
    message?: string
    data?: T
}
