import { createCartItem, fetchCarts } from '~/api'

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
  async fetchCarts(context) {
    const { data } = await fetchCarts()
    const items = data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    context.commit('setCarts', items)
  },
  async addCartItem(context, cartItem) {
    await createCartItem(cartItem)

    context.commit('addCartItems', cartItem)
  },
}
