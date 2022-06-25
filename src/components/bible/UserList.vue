<template>
  <div
    v-if="isSigned"
    class="q-pt-md"
    style="width: 100%"
  >
    <q-card>
      <q-card-section class="bg-primary text-white shadow-2 text-center text-h5">
        일일 읽기 목록
      </q-card-section>
      <q-separator />
      <q-date
        v-model="dateSelect"
        mask="YYYY-MM-DD"
        @update:model-value="getAllBibleData"
      />
    </q-card>
    <q-card
      v-for="user in users"
      :key="user.id"
      bordered
      class="q-mt-sm "
    >
      <q-card-section class="bg-secondary text-white">
        {{ user.data().name }} - {{ user.data().email }}
      </q-card-section>
      <q-card-section>
        <BibleDailyItemComponent
          :items="getUserBibleData(user.data().email)"
        />
      </q-card-section>
    </q-card>
  </div>

  <div
    v-if="!isSigned"
    class="q-ma-md"
  >
    로그인 하세요.
  </div>
</template>

<script defalt lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { date } from 'quasar'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { isSigned } from 'src/composables/useAuth'
import { UserList, getAllUser } from 'src/models/User'
import { BibleRecorde, getBibleRecordeDate } from 'src/models/Bible'
import BibleDailyItemComponent from './BibleDailyItem.vue'

export default defineComponent({
  name: 'UserListComponet',
  components: { BibleDailyItemComponent },
  setup () {
    // 변수 정의
    const users = ref<QueryDocumentSnapshot<UserList>[]>([])
    const bibleData = ref<QueryDocumentSnapshot<BibleRecorde>[]>([])
    const dateSelect = ref(date.formatDate(Date(), 'YYYY-MM-DD'))
    const userBibleData = ref(Object)

    const getAllUserData = async () => {
      const userQuerySnapshot = await getAllUser()
      users.value = userQuerySnapshot.docs
      // console.log(users.value[0].data().name)
      // for (const i of users) {
      //   data.value[i].name = users.value[i].data().name
      // }
      getAllBibleData()
    }

    const getAllBibleData = async () => {
      const bibleQuerySnapshot = await getBibleRecordeDate(dateSelect.value)
      bibleData.value = bibleQuerySnapshot.docs
    }

    const getUserBibleData = (email:string) => {
      return bibleData.value.filter((val) => val.data().email === email)
    }

    onMounted(getAllUserData)

    return {
      // 리턴 할 변수
      users,
      bibleData,
      isSigned,
      dateSelect,
      userBibleData,
      getAllUserData,
      getAllBibleData,
      getUserBibleData
    }
  },
  watch: {
    isSigned: function (newVal) {
      if (newVal) {
        // this.getData()
      }
    }
  }
})
</script>
