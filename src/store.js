import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoadingList: false,
  list: [],
  loadListError: null,
  isLoadingSingle: false,
  isSavingSingle: false,
  single: null,
  loadSingleError: null,
  saveSingleError: null
}

const mutations = {
  loadListStart (state) {

  },
  loadListSuccess (state, response) {

  },
  loadListError (state, err) {

  },
  createStart (state) {

  },
  createSuccess (state, response) {

  }
}

const actions = {
  loadList () {
    
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})
