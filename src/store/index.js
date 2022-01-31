import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  mutations: {
    SET_USER(state, users){
      state.users = users
    },
    NEW_USER(state, user){
      state.users.push(user)
    },
    DELETE_USER(state, id) {
      console.log(id)
      state.users.splice(id, 1)
    }
  },
  actions: {
    load_users({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/users/')
      .then (result => {
        commit('SET_USER', result.data)
      })
    },

  },
  modules: {
  },
  getters: {
    get_all_users: (state) => state.users
  }
})
