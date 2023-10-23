<template>
  <div class="product_box">
    <div class="imageBox">
      <img :src="product.imgSrc" alt="product image" />
    </div>
    <div class="logo_box">
      <img :src="product.logo" alt="" />
    </div>
    <p class="companyTitle">{{ product.companyTitle }}</p>
    <p class="shortDesc">{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="css" scoped>
.product_box {
  width: 150px;
}

.imageBox img {
  max-width: 100%;
  height: 150px;
  border-radius: 8px;
}
.companyTitle {
  font-size: 14px;
  padding-left: 5px;
  display: inline;
}
.shortDesc {
  padding-left: 5px;
}

.logo_box {
  width: 15px;
  height: 15px;
  display: inline;
}

.logo_box img {
  max-width: 100%;
}
</style>
