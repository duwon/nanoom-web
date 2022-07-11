<template>
  <div class=".app">
    USER PAGE - {{ date.formatDate(Date.now(), 'YYYY-MM-DD') }}

    <UserRegister />
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { date } from 'quasar'
import UserList from 'src/components/user/UserList.vue'
import UserRegister from 'src/components/user/UserRegister.vue'

export default defineComponent({
  name: 'UserPage',
  components: {
    UserRegister,
    UserList
  },
  setup () {
    return {
      date
    }
  },
  data () {
    return {

    }
  }
})
</script>

<style>
  .app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1024px
  }

</style>
