import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/write',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/WritePage.vue') }]
  },
  {
    path: '/list',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ListPage.vue') }]
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
      { path: '', component: () => import('pages/test/Auth.vue') },
      { path: 'home', component: () => import('pages/test/Home.vue'), meta: { requiresAuth: true } },
      { path: 'youtube', component: () => import('components/youtube/List.vue') }
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
