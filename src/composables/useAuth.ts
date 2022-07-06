import { ref, computed } from 'vue'
import { auth } from 'src/boot/firebase'
import {
  onAuthStateChanged,
  User
} from 'firebase/auth'
import { UserList, checkUser } from 'src/models/User'

const nanoomUser = ref<UserList | null>(null)

const firebaseUser = ref<User | null>(null)

const isSigned = computed(() => nanoomUser.value !== null)

const useAuth = () => {
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

export { useAuth, nanoomUser, firebaseUser, isSigned }
