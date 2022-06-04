import { ref } from 'vue'
import { auth } from 'src/boot/firebase'
import {
  onAuthStateChanged,
  User
} from 'firebase/auth'

export const firebaseUser = ref<User | null>(null)

export const useAuth = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
}
