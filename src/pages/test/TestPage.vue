<template>
  <div>
    {{ counter.count }} <br>{{ counter.doubleCount }}
  </div>
</template>

<script>

import { useCounterStore } from 'stores/user'

export default {
  setup () {
    const counter = useCounterStore()
    counter.count++
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()

    return {
      // you can return the whole store instance to use it in the template
      counter
    }
  },
  computed () {
    console.log('start')
  }
}
</script>
