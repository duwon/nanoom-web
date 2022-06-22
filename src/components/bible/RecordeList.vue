<template>
  <div
    v-if="isSigned"
    class="q-pa-md"
    style="width: 100%"
  >
    <q-toolbar class="bg-primary text-white shadow-2 text-center">
      <q-toolbar-title>성경 읽기 목록 </q-toolbar-title>
    </q-toolbar>
    <q-list>
      <RecordeListItemComponent
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </q-list>
    <div
      v-if="items.length > 6"
      v-scroll-fire="getDataNext"
      class="text-center"
      @click="getDataNext"
    >
      더 보기
    </div>
  </div>
  <q-page-sticky
    v-if="isSigned"
    position="bottom-right"
    :offset="[18, 18]"
  >
    <q-btn
      round
      color="pink"
      icon="mdi-pencil"
      to="/bible/write"
    />
  </q-page-sticky>
  <div
    v-if="!isSigned"
    class="q-ma-md"
  >
    로그인 하세요.
  </div>
</template>

<script defalt lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { debounce } from 'quasar'
import RecordeListItemComponent from './RecordeListItem.vue'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { BibleRecorde, getBibleRecorde, getBibleRecordeNext } from 'src/models/Bible'
import { firebaseUser, isSigned } from 'src/composables/useAuth'

export default defineComponent({
  name: 'BibleRecordComponet',
  components: { RecordeListItemComponent },
  setup () {
    // 변수 정의
    const items = ref<QueryDocumentSnapshot<BibleRecorde>[]>([])
    const user = ref(firebaseUser)

    const getData = async () => {
      // console.log('User Info', firebaseUser)

      if (user.value !== null) {
        const querySnapshot = await getBibleRecorde(user.value.email || '')
        items.value = querySnapshot.docs
      }
    }

    const getDataNext = async () => {
      if (user.value !== null) {
        const querySnapshot = await getBibleRecordeNext(user.value.email || '')
        items.value = items.value.concat(querySnapshot.docs)
      }
    }

    onMounted(getData)

    function onScroll () {
      console.log('end')
      getDataNext()
    }

    return {
      // 리턴 할 변수
      items,
      isSigned,
      getData,
      getDataNext,
      onScroll: debounce(onScroll, 200) // debounce for 200ms
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
