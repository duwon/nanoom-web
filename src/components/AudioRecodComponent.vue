<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-date
        v-model="date"
        mask="YYYY-MM-DD"
      />
    </div>
    선택한 날짜 : {{ date }}
  </div>
</template>

<script>
import { ref } from 'vue'
// we import all of `date`
import { date } from 'quasar'
// destructuring to keep only what is needed

export default {
  setup () {
    const timeStamp = Date.now()
    const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

    return {
      date: ref(formattedString)

    }
  }
}
</script>
