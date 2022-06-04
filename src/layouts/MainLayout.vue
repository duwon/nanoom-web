
<script lang="ts">
import { defineComponent } from 'vue'
import AuthButton from 'src/components/auth/AuthButton.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    AuthButton
  },

  setup () {
    return {
    }
  }
})
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          나눔의교회
        </q-toolbar-title>

        <AuthButton />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
