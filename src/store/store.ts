import { createStore } from 'vuex'


interface State {
  counter: number
}
export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    increment(state: State) {
      state.counter++
      console.log('muta index' , state.counter)


    },
    decrement(state: State) {
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})