import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut as firebaseSignOut
} from 'firebase/auth'

// import { user } from '@/composables/useUser'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

console.log('Mode:', import.meta.env.MODE)

// validate firebase config
if (
  !firebaseConfig.apiKey ||
  !firebaseConfig.authDomain ||
  !firebaseConfig.projectId ||
  !firebaseConfig.storageBucket ||
  !firebaseConfig.messagingSenderId ||
  !firebaseConfig.appId ||
  !firebaseConfig.measurementId
) {
  throw new Error('Missing firebase config')
}

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)

export const logEventToFirebase = (eventName: string, eventParams: Object) =>
  logEvent(analytics, eventName, eventParams)

const auth = getAuth(app)

export const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())

export const signOut = () => firebaseSignOut(auth)

const unsubscribe = onAuthStateChanged(auth, (_user) => {
  unsubscribe()
  if (_user) {
    localStorage.setItem('user', JSON.stringify(_user))
  }
})
