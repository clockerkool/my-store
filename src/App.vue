<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/cart">Корзина ({{ cart.length }})</router-link>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import { useCartStore } from './stores/cart'
const { cart } = useCartStore()
</script>
