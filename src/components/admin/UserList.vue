<template>
  <div class="full-width row justify-center">
    <q-list
      bordered
      class="rounded-borders"
      style="max-width: 600px"
    >
      <UserListItem
        v-for="user in userList"
        :key="user"
        :user="user"
      />
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { apiUrl } from 'src/boot/fileserver'
import axios from 'axios'
import UserListItem from 'src/components/admin/UserListItem.vue'

export default defineComponent({
  name: 'UserListPage',
  components: {
    UserListItem
  },
  setup () {
    const $q = useQuasar()

    const userList = ref(Object)

    return {
      userList,

      async getList () {
        axios.get(apiUrl + '/user/list', {
          headers: {
            'x-access-token': $q.cookies.get('x-access-token')
          }
        })
          .then((response) => {
            userList.value = response.data.users
            // 응답 처리
            console.log(userList.value)
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
