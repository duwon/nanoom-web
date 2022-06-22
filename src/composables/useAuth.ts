import { ref, computed } from 'vue'
import { auth } from 'src/boot/firebase'
import {
  onAuthStateChanged,
  User
} from 'firebase/auth'
import { UserList, checkUser } from 'src/models/User'

export const nanoomUser = ref<UserList | null>(null)

export const firebaseUser = ref<User | null>(null)
export const isSigned = computed(() => nanoomUser.value !== null)

export const useAuth = () => {
  onAuthStateChanged(auth, async (user) => {
    firebaseUser.value = user
    if (firebaseUser.value) {
      nanoomUser.value = await checkUser(firebaseUser.value.email || '')
      // console.log(nanoomUser.value)
    } else {
      nanoomUser.value = null
      // console.log('log-out')
    }
  })
}
