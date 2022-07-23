<template>
  <div
    class="icon"
    :class="[`icon--${name}`, `icon--${size}`, { 'has-align-fix': fixAlign }]"
  >
    <img
      :src="require(`./img/${name}.svg`)"
      :alt="`${name}`"
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    },
    modifier: {
      type: Object,
      default: null
    },
    fixAlign: {
      type: Boolean,
      default: false
    }
  }
  // created: function() {}
}
</script>

<style lang="scss" scoped></style>
