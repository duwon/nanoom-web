<template>
  <div>
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { date } from 'quasar'
import UserList from '../../components/bible/UserList.vue'

export default defineComponent({
  name: 'TestPage',
  components: {
    UserList
  },
  setup () {
    const formattedString = date.formatDate(Date.now(), 'YYYY-MM-DD')

    return {
      date: ref(formattedString)
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
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1024px
  }

</style>
