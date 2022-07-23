<template>
  <div class="full-width row justify-center">
    <q-list
      bordered
      class="rounded-borders"
    >
      <ContentsListItem
        v-for="contents in contentsList"
        :key="contents"
        :contents="contents"
        :view-category="true"
      />
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { apiUrl } from 'src/boot/fileserver'
import axios from 'axios'
import ContentsListItem from 'src/components/bbs/DocumentsListItem.vue'

export default defineComponent({
  name: 'UserListPage',
  components: {
    ContentsListItem
  },
  setup () {
    const $q = useQuasar()

    const contentsList = ref(Array)

    return {
      contentsList,

      async getList () {
        axios.get(apiUrl + '/bbs/list', {
        })
          .then((response) => {
            // 응답 처리
            console.log(response.data.results)
            contentsList.value = response.data.results
          })
          .catch((error) => {
            // 예외 처리
            console.log(error)
          })
      }
    }
  },
  created () {
    this.getList()
  }
})

</script>

<style lang="sass" scoped>

</style>
