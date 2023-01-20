<template>
  <div>
    <h1>상세페이지</h1>
    <div>
      <img :src="product.imageUrl" :alt="product.name" />
      <p>name : {{ product.name }}</p>
      <p>price : {{ product.price }}</p>
      <button type="button" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/index'
export default {
  async asyncData({ params }) {
    const id = params.id
    const response = await fetchProductById(id)
    const product = response.data
    return { product }
  },
  //   created() {
  //     const id = this.$route.params.id
  //     fetchProductById(id)
  //   },
  methods: {
    addToCart() {
      this.$router.push('/cart')
    },
  },
}
</script>

<style></style>
