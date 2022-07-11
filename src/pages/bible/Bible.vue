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
