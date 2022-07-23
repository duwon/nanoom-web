<template>
  <div class="q-gutter-md q-mt-md">
    <q-card
      class="q-pa-xs"
    >
      <div>
        <q-list
          bordered
          class="full-width"
        >
          <ContentsListItem
            v-for="contents in contentsList"
            :key="contents"
            :contents="contents"
            :view-category="false"
          />
        </q-list>
      </div>
      <div>
        <q-btn
          label="쓰기"
          type="submit"
          color="primary"
          @click="onWriteDocuments"
        />
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ContentsListItem from 'src/components/bbs/DocumentsListItem.vue'
import { useRouter } from 'vue-router'
import { getBoardListAPI } from 'src/api/board'

export default defineComponent({
  name: 'UserListPage',
  components: {
    ContentsListItem
  },

  setup () {
    const router = useRouter()
    const contentsList = ref(Array)
    const category = ref()

    return {
      contentsList,
      category,

      getList () {
        if (!category.value) {
          category.value = ''
        }

        getBoardListAPI(category.value, {
          page: 0,
          limit: 20
        })
          .then((response) => {
            // 응답 처리
            // console.log(response.data.results)
            contentsList.value = response.data.results
          })
          .catch((error) => {
            // 예외 처리
            console.log(error)
          })
      },
      onWriteDocuments () {
        router.push('/board/write/' + category.value)
      }
    }
  },
  created () {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.category = this.$route.params.category
        this.getList()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  }
})

</script>

<style lang="sass" scoped>

</style>
