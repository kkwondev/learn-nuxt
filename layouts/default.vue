<template>
  <div class="wrap">
    <header class="title">
      <NuxtLink to="/" class="logo">Nuxt Shopping</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
  max-width: 1710px;
  margin: 0 auto;
}
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
