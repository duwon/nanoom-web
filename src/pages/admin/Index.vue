<template>
  <div
    class="full-width"
    style="max-width:960px"
  >
    <UserLogin />
    <UserList />
    <DocumentsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserList from 'src/components/admin/UserList.vue'
import UserLogin from 'src/components/auth/LoginComponent.vue'
import DocumentsList from 'src/components/bbs/DocumentsList.vue'

export default defineComponent({
  name: 'AdminIndexPage',
  components: {
    UserList,
    UserLogin,
    DocumentsList
  },
  setup () {
    return {
    }
  }
})

</script>

<style lang="sass" scoped>

</style>
