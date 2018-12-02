import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      result: '未查詢'
    },
    mutations: {
      RESULT(state, payload) {
        state.result = payload
      }
    }
  })

export default store
