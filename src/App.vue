<template>
  <div class="productsList">
    <product-card v-for="product in productsList" :product="product" :key="product.id" />
  </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue'
import { raspberryList as data } from './constants/2_data_raspberry'

export default {
  name: 'App',
  components: { ProductCard },

  computed: {
    productsList() {
      return data
    },
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #151514;
  color: #f3f3f3;
}

.productsList {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
</style>
