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
        <q-toolbar-title
          shrink
          class="row items-center no-wrap justify-center"
        >
          <q-btn
            class="q-ml-sm text-bold text-h5"
            flat
            to="/"
          >
            <img
              src="icons/favicon-32x32.png"
              class="q-mr-md"
            >
            나눔의교회
          </q-btn>
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
      <q-page class="full-width row wrap content-start justify-center ">
        <router-view />
        <!-- place QPageScroller at end of page -->
        <q-page-scroller
          position="bottom"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn
            fab
            icon="keyboard_arrow_up"
            color="accent"
          />
        </q-page-scroller>

        <div class="col-12 bg-black text-white q-mt-xl q-pa-md text-center">
          <q-img
            :src="require('../assets/images/nanoomLogoBottom2.png')"
            style=" max-width: 300px"
          />
          <div>
            서울 중구 동호로11길 111 (신당동) 나눔의교회 <br> TEL : 02-2238-6868, FAX : 02-2233-0288
          </div>
        </div>
      </q-page>
    </q-page-container>
    <q-page-container />
  </q-layout>
</template>

<script>
import { ref } from 'vue'

window.addEventListener('load', function () {
  setTimeout(scrollTo, 0, 0, 1)
}, false)

export default {
  name: 'GooglePhotosLayout',
  components: { },
  setup () {
    const leftDrawerOpen = ref(false)
    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    return {
      leftDrawerOpen,

      topMenu: [{
        title: '교회소개',
        subMenu: [
          { icon: 'mdi-church', title: '교회소개', link: '/about' },
          { icon: 'mdi-account-tie', title: '담임목사', link: '/greeting' },
          { icon: 'people', title: '섬기는 사람들', link: '/people' },
          { icon: 'history', title: '발자취', link: '/history' },
          { icon: 'map', title: '오시는 길', link: '/location' }
        ]
      },
      {
        title: '예배와말씀',
        subMenu: [
          { icon: 'mdi-clock', title: '예배시간', link: '/worshiptime' },
          { icon: 'mdi-book-cross', title: '설교영상', link: '/sermon' }
        ]
      },
      {
        title: '교육',
        subMenu: [
          { icon: 'mdi-book-education', title: '제자훈련', link: '/d12' },
          { icon: 'school', title: '영아부', link: '/edu/infant' },
          { icon: 'school', title: '유치부', link: '/edu/kindergarden' },
          { icon: 'school', title: '아동부', link: '/edu/children' },
          { icon: 'school', title: '중고등부', link: '/edu/secondary' },
          { icon: 'school', title: '청년부', link: '/edu/youth' }
        ]
      },
      {
        title: '공동체',
        subMenu: [
          { icon: 'people', title: '셀모임', link: '/cell' },
          { icon: 'people', title: '선교회', link: '/missiongroup' },
          { icon: 'people', title: '기타', link: '/' }
        ]
      }
      ],
      toggleLeftDrawer
    }
  }
}
</script>

<style lang="sass">
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css)

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
    font-family: Arial, 'Nanum Gothic', serif

</style>
