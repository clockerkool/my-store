<template>
    <h1>Корзина</h1>
    <div v-if="cart.length === 0">
      <p>Корзина пуста</p>
    </div>
    <div v-else>
      <ProductCard
        v-for="item in cart"
        :key="item.id"
        :product="item"
      />
      <p>Итого: {{ totalPrice }}</p>
    </div>
  </template>
  
  <script setup>
  import ProductCard from '../components/ProductCard.vue'
  import { useCartStore } from '../stores/cart'
  import { computed } from 'vue';
  
  const { cart } = useCartStore()
  
  const totalPrice = computed(() => {
    return cart.reduce((total, item) => total + item.price, 0)
  })
  </script>