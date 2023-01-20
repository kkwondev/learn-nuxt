import { createCartItem, fetchCarts } from '~/api'

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push({
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    })
  },
  setCarts(state, carts) {
    state.cartItems = carts
  },
}

export const actions = {
  async [FETCH_CART_ITEMS](context) {
    const { data } = await fetchCarts()
    const items = data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    context.commit('setCarts', items)
  },
  async [ADD_CART_ITEM](context, cartItem) {
    await createCartItem(cartItem)

    context.commit('addCartItem', cartItem)
  },
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch(FETCH_CART_ITEMS)
  },
}
