import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TestPage.vue') }]
  },
  {
    path: '/write',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WritePage.vue') }]
  },
  {
    path: '/list',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ListPage.vue') }]
  },
  {
    path: '/',
    component: () => import('layouts/GoogleLayout.vue'),
    children: [{ path: '', component: () => import('pages/TestPage.vue') }]
  },
  {
    path: '/bible',
    component: () => import('layouts/BibleLayout.vue'),
    children: [{ path: '', component: () => import('pages/bible/Bible.vue') }]
  },
  {
    path: '/bible/list',
    component: () => import('layouts/BibleLayout.vue'),
    children: [{ path: '', component: () => import('pages/bible/BibleList.vue') }]
  },
  {
    path: '/bible/write',
    component: () => import('layouts/BibleLayout.vue'),
    children: [{ path: '', component: () => import('pages/bible/BibleWrite.vue') }]
  },
  {
    path: '/user',
    component: () => import('layouts/BibleLayout.vue'),
    children: [{ path: '', component: () => import('pages/user/User.vue') }]
  },
  {
    path: '/user/register',
    component: () => import('layouts/BibleLayout.vue'),
    children: [{ path: '', component: () => import('components/user/UserRegister.vue') }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
