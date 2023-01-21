<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/index'
import { ADD_CART_ITEM } from '~/store'
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
      this.$store.dispatch(ADD_CART_ITEM, this.product)
      this.$router.push('/cart')
    },
  },
  head() {
    return {
      title: `상품 상세 페이지 - ${this.product.name}`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `상품 상세 페이지  - ${this.product.name}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '상품의 상세 정보를 확인해보세요',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.product.imageUrl,
        },
      ],
    }
  },
  // head: {
  //   title: `상품 상세 페이지`,
  //   meta: [
  //     {
  //       hid: 'og:title',
  //       property: 'og:title',
  //       content: '상품 상세 페이지',
  //     },
  //     {
  //       hid: 'og:description',
  //       property: 'og:description',
  //       content: '상품의 상세 정보를 확인해보세요',
  //     },
  //     {
  //       hid: 'og:image',
  //       property: 'og:image',
  //       content: 'http://placeimg.com/640/480/fashion',
  //     },
  //   ],
  // },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
