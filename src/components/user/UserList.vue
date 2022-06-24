<template>
  <div
    v-if="isSigned"
    class="q-pa-md"
    style="width: 100%"
  >
    <q-card>
      <q-card-section class="bg-primary text-white shadow-2 text-center text-h5">
        사용자 목록
      </q-card-section>
    </q-card>
    <q-list>
      <UserListItemComponent
        v-for="item in users"
        :key="item.id"
        :item="item"
      />
    </q-list>
  </div>
  <q-btn @click="getAllData">
    사용자 불러오기
  </q-btn>
  <q-btn @click="getData">
    사용자 확인
  </q-btn>
  <div
    v-if="!isSigned"
    class="q-ma-md"
  >
    로그인 하세요.
  </div>
</template>

<script defalt lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { firebaseUser, isSigned } from 'src/composables/useAuth'
import { UserList, getUser, getAllUser } from 'src/models/User'
import UserListItemComponent from './UserListItem.vue'

export default defineComponent({
  name: 'UserListComponet',
  components: { UserListItemComponent },
  setup () {
    // 변수 정의
    const users = ref<QueryDocumentSnapshot<UserList>[]>([])
    const user = ref(firebaseUser)

    const getData = async () => {
      // console.log('User Info', firebaseUser)

      if (user.value !== null) {
        const querySnapshot = await getUser(user.value.email || '')
        users.value = querySnapshot.docs
        // console.log(querySnapshot, querySnapshot.docs)
      }
    }
    const getAllData = async () => {
      const querySnapshot = await getAllUser()
      users.value = querySnapshot.docs
      console.log(users.value[0].data().name)
    }

    onMounted(getData)

    return {
      // 리턴 할 변수
      users,
      isSigned,
      getData,
      getAllData
    }
  },
  watch: {
    isSigned: function (newVal) {
      if (newVal) {
        this.getData()
      }
    }
  }
})
</script>
