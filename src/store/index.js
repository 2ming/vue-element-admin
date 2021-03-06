import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        token: false,
        title: '',
        isLoading: false
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            state.token = true;
            state.user = data;
            localStorage.setItem('token',true);
            localStorage.setItem('user',JSON.stringify(data));

        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            state.token = false
            state.user = null;
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        }
    }
})

// export default new Vuex.Store({
//   state,
//   actions,
//   getters,
//   modules: {
//     cart,
//     products
//   },
//   strict: debug
// })
