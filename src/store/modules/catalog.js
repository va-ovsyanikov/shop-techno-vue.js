import axios from 'axios'

const state = {
    products: [],
    searchValue: '',
    sortValue: ''
};

const mutations = {
    FETCH_PRODUCTS(state, products) {
        state.products = products
    },
    SEARCH_PRODUCTS(state, val) {
        state.searchValue = val
    },
    SORT_PRODUCTS(state, val) {
        state.sortValue = val
    },

};

const actions = {
    FETCH_PRODUCTS({ commit }) {
        return axios.get('http://localhost:3000/products')
            .then(response => {
                commit('FETCH_PRODUCTS', response.data)

            })
            .catch((error) => {
                console.log(error)
            })
    },
    SEARCH_PRODUCTS({ commit }, val) {
        commit('SEARCH_PRODUCTS', val)
    },
    SORT_PRODUCTS({ commit }, val) {
        commit('SORT_PRODUCTS', val)
    }


};
const getters = {

    PRODUCTS(state) {
        return state.products
    },
    SEARCH_VALUE(state) {
      return state.searchValue;

    },
    SORT_VALUE(state) {
     return state.sortValue;
    }

};

export default {
    state,
    getters,
    mutations,
    actions
}