<template>
  <q-layout
    view="lHh Lpr fff"
    class="bg-grey-1 "
  >
    <q-header
      elevated
      class="bg-white text-grey-8"
      height-hint="64"
    >
      <q-toolbar
        class="GPL__toolbar"
        style="height: 64px"
      >
        <q-btn
          v-if="$q.screen.lt.sm"
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          class="q-mx-md mobile"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title

          shrink
          class="row items-center no-wrap"
        >
          <span class="q-ml-sm text-bold text-h5">나눔의교회</span>
        </q-toolbar-title>

        <q-space />
        <div
          v-for="topmenu in topMenu"
          :key="topmenu.title"
        >
          <q-btn
            v-if="$q.screen.gt.xs"
            flat
            dense
            no-wrap
            color="primary"
            no-caps
            class="q-ml-sm q-px-md text-h5"
            style="min-width: 100px"
          >
            {{ topmenu.title }}
            <q-menu>
              <q-list
                class="text-grey-8"
                style="min-width: 100px"
              >
                <q-item aria-hidden="true">
                  <q-item-section
                    class="text-uppercase text-grey-7"
                    style="font-size: 1.2rem"
                  >
                    {{ topmenu.title }}
                  </q-item-section>
                </q-item>
                <q-item
                  v-for="submenu in topmenu.subMenu"
                  :key="submenu.title"
                  v-close-popup
                  clickable
                  aria-hidden="true"
                  :to="submenu.link"
                >
                  <q-item-section avatar>
                    <q-icon :name="submenu.icon" />
                  </q-item-section>
                  <q-item-section>{{ submenu.title }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <AuthButton />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <span class="q-ml-sm">나눔의교회</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <div
            v-for="topmenu in topMenu"
            :key="topmenu.title"
          >
            <q-item
              v-for="submenu in topmenu.subMenu"
              :key="submenu.title"
              clickable
              class="GPL__drawer-item"
              :to="submenu.link"
            >
              <q-item-section avatar>
                <q-icon :name="submenu.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ submenu.title }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator class="q-my-md" />
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="__page-container">
      <q-page>
        <router-view />
        <!-- place QPageScroller at end of page -->
        <q-page-scroller
          position="bottom-left"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn
            fab
            icon="keyboard_arrow_up"
            color="accent"
          />
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import AuthButton from 'src/components/auth/AuthButton.vue'

export default {
  name: 'GooglePhotosLayout',
  components: { AuthButton },
  setup () {
    const leftDrawerOpen = ref(false)
    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    return {
      leftDrawerOpen,
      topMenu: [
        {
          title: '성경 읽기',
          subMenu: [
            { icon: 'list', title: '목록', link: '/bible/list' },
            { icon: 'add', title: '올리기', link: '/bible/write' }
          ]
        },
        {
          title: '모두 보기',
          subMenu: [
            { icon: 'archive', title: '모두 보기', link: '/bible' }
          ]
        },
        {
          title: '기타',
          subMenu: [
            { icon: 'settings', title: 'Settings', link: '' },
            { icon: 'help', title: 'Help & Feedback', link: '' },
            { icon: 'get_app', title: 'App Downloads', link: '' }
          ]
        }
      ],
      toggleLeftDrawer
    }
  }
}
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 35%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px

.__page-container
    display: flex
    justify-content: center
    padding: 70px 16px 100px

</style>
