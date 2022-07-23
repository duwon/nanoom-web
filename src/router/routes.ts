import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/church/IndexPage.vue') },
      { path: 'about', component: () => import('pages/church/About.vue') }, // 교회소개
      { path: 'people', component: () => import('pages/church/People.vue') }, // 섬기는 사람들
      { path: 'history', component: () => import('pages/church/History.vue') }, // 발자취
      { path: 'worshiptime', component: () => import('pages/church/WorshipTime.vue') }, // 예배시간
      { path: 'location', component: () => import('pages/church/Location.vue') }, // 오시는길
      { path: 'sermon', component: () => import('pages/church/Sermon.vue') }, // 설교영상
      { path: 'd12', component: () => import('pages/church/D12.vue') }, // 제자훈련
      { path: 'cell', component: () => import('pages/church/Cell.vue') }, // 셀모임
      { path: 'missiongroup', component: () => import('pages/church/MissionGroup.vue') }, // 선교회
      { path: 'greeting', component: () => import('pages/church/Greeting.vue') }, // 담임목사
      { path: 'edu/:id', component: () => import('pages/church/Education.vue') } // 주일학교

    ]
  },
  {
    path: '/bible',
    component: () => import('layouts/BibleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/bible/Bible.vue') },
      { path: 'list', component: () => import('pages/bible/BibleList.vue') },
      { path: 'write', component: () => import('pages/bible/BibleWrite.vue') }
    ]
  },
  {
    path: '/board',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/bbs/DocumentsList.vue') },
      { path: 'write', component: () => import('pages/bbs/DocumentsWrite.vue') },
      { path: 'write/:category', component: () => import('pages/bbs/DocumentsWrite.vue') },
      { path: 'detail', component: () => import('components/bbs/DocumentsDetail.vue') },
      { path: ':category', component: () => import('pages/bbs/DocumentsList.vue') },
      { path: ':category/:id', component: () => import('pages/bbs/DocumentsView.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/BibleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/User.vue') },
      { path: 'register', component: () => import('components/user/UserRegister.vue') }
    ]
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/test/TestPage.vue') },
      { path: ':id', component: () => import('pages/test/TestPage.vue') },
      { path: 'auth', component: () => import('pages/test/Auth.vue') },
      { path: 'home', component: () => import('pages/test/Home.vue'), meta: { requiresAuth: true } },
      { path: 'youtube', component: () => import('components/youtube/Broadcast.vue') },
      { path: 'write', component: () => import('pages/test/WritePage.vue') },
      { path: 'list', component: () => import('pages/test/ListPage.vue') },
      { path: 'bar', component: () => import('pages/test/Bar.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/auth/LoginPage.vue') },
      { path: 'join', component: () => import('pages/auth/SignInPage.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/admin/Index.vue') },
      { path: ':id', component: () => import('pages/test/TestPage.vue') },
      { path: 'auth', component: () => import('pages/test/Auth.vue') },
      { path: 'home', component: () => import('pages/test/Home.vue'), meta: { requiresAuth: true } },
      { path: 'youtube', component: () => import('components/youtube/Broadcast.vue') },
      { path: 'write', component: () => import('pages/test/WritePage.vue') },
      { path: 'list', component: () => import('pages/test/ListPage.vue') },
      { path: 'bar', component: () => import('pages/test/Bar.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
