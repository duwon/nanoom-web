
<template>
  <q-layout class="bg-grey-1">
    <q-header
      elevated
      class="text-white"
      style="background: #24292e"
      height-hint="61.59"
    >
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn
          round
          dense
          flat
          :ripple="false"
          :icon="fabGithub"
          size="19px"
          color="white"
          class="q-mr-sm"
          no-caps
        />
        <q-toolbar-title class="text-h5">
          나눔의교회
        </q-toolbar-title>

        <div
          v-if="$q.screen.gt.sm"
          class="GL__toolbar-link q-ml-xs q-gutter-md text-h5 text-weight-bold row items-center no-wrap"
        >
          <a
            href="javascript:void(0)"
            class="text-white"
          >
            교회 소개
          </a>
          <q-space />
          <a
            href="javascript:void(0)"
            class="text-white"
          >
            설교
          </a>
          <q-space />
          <a
            href="javascript:void(0)"
            class="text-white"
          >
            교육/훈련
          </a>
          <q-space />
          <a
            href="javascript:void(0)"
            class="text-white"
          >
            공동체
          </a>
        </div>

        <q-space />
        <AuthButton />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { fabGithub } from '@quasar/extras/fontawesome-v6'
import AuthButton from 'src/components/auth/AuthButton.vue'

export default {
  name: 'MyLayout',
  components: { AuthButton },
  setup () {
    return {
      fabGithub
    }
  }
}
</script>

<style lang="sass">
.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden
    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible
  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7
  &__menu-link:hover
    background: #0366d6
    color: white
  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important
  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9
  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none
</style>
