import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  persist: true,

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  },

  actions: {
    increment () {
      this.count++
    }
  }
})

export const userInfoStore = defineStore('user', {
  state: () => ({
    displayName: '',
    email: ''
  }),
  persist: true,

  getters: {
  },

  actions: {
  }
})
