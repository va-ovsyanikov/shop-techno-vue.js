const  state = {
       cart:[]
};
const  mutations = {
    ADD_TO_CART(state, product) {
        if (state.cart.length) {
            let isProductExists = false;
            state.cart.map(item => {
                if (item.id === product.id) {
                    isProductExists = true
                    confirm('The product has added tocart')
                }
            })
            if (!isProductExists) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
    DELETE_FROM_CART(state, index) {
        if (confirm('Do you want ta delete this product')) {
            state.cart.splice(index, 1)
        }
    },
    INCREMENT_CART_ITEM(state, index) {
        state.cart[index].quantity++
      
    },
    DECREMENT_CART_ITEM(state, index) {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    }
};
const  actions = {
    ADD_TO_CART({ commit }, product) {
        commit('ADD_TO_CART', product)
    },
    DELETE_FROM_CART({ commit }, index) {
        commit('DELETE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({ commit }, index) {
        commit('INCREMENT_CART_ITEM', index)

    },
    DECREMENT_CART_ITEM({ commit }, index) {
        commit('DECREMENT_CART_ITEM', index)
    }
};
const getters = {
    CART(state) {
        return state.cart
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}