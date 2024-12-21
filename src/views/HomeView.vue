<template>
    <h1>Список товаров</h1>
    <div class="products">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </template>
  
  <script setup>
  import ProductItem from '../components/ProductItem.vue'
  import { ref, onMounted } from 'vue'
  import { products } from '../stores/products'
  
  
  const productsList = ref(products);
  </script>