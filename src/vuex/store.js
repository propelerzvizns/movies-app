import Vue from 'vue'
import Vuex from 'vuex'

import{ getters } from './getters'
import{ mutations } from './mutations'
import{ actions } from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        
        movies: [ {id: 23, title: 'safsaf'}]
    },
    getters,    //"treci korak"
    mutations,   //2gi korak

    actions, //prvi korak
       



})

// console.log('store', { store})