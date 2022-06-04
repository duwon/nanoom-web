import { initializeApp } from 'firebase/app'
import firebaseConfig from 'app/firebaseConfig'
import {
  getAuth,
  connectAuthEmulator
} from 'firebase/auth'

initializeApp(firebaseConfig)

const auth = getAuth()
auth.useDeviceLanguage()
connectAuthEmulator(auth, 'http://localhost:9099')

export { auth }
