import { defineStore, } from 'pinia'

type TState = {
  currentScore: number,
  currentFingering: number | null,
  isBonusActive: boolean,
}
const ls = localStorage.getItem('currentScore')
const createInitialState = (): TState => ({
  currentScore: JSON.parse(ls) ?? 0,
  currentFingering: null,
  isBonusActive: false,
})

export const useCommonStore = defineStore('commonStore', {
  state: createInitialState,

  getters: {

  },

  actions: {
    increment () {
      this.currentScore++
      localStorage.setItem('currentScore', JSON.stringify(this.currentScore))
    },
    dicrement () {
      this.currentScore--
      localStorage.setItem('currentScore', JSON.stringify(this.currentScore))
    },
    defineCurrentFingering (id: number) {
      this.currentFingering = id
    },
    sendNull () {
      this.currentFingering = null
    },
    toggleBonusActive () {
      this.isBonusActive = !this.isBonusActive
    }
  }
})

