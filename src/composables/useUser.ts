import type { User } from 'firebase/auth'

export const user = computed<User | null>(() => JSON.parse(localStorage.getItem('user') || 'null'))
export const idToken = computed(() => localStorage.getItem('idToken'))
