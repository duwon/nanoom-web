import { initializeApp } from 'firebase/app'
import firebaseConfig from 'app/firebaseConfig'
import {
  getAuth,
  connectAuthEmulator
} from 'firebase/auth'

import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

import { getStorage } from 'firebase/storage'

// Get a reference to the storage service, which is used to create references in your storage bucket

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth()
auth.useDeviceLanguage()
connectAuthEmulator(auth, 'http://localhost:9099')

// firebaseApps previously initialized using initializeApp()
const db = getFirestore()
connectFirestoreEmulator(db, 'localhost', 8081)

// Set the configuration for your app
// TODO: Replace with your app's config object
const storage = getStorage(firebaseApp)

export { auth, db, storage }
