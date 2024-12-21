<template>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price }}</p>
      <button @click="addToCart(product)">В корзину</button>
    </div>
    <div v-else>
      <p>Товар не найден</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useCartStore } from '../stores/cart'
  import { products } from '../stores/products'
  
  const props = defineProps({
      id: {
          type: String,
          required: true
      }
  })
  const { addToCart } = useCartStore()
  
  const product = ref(null)
  onMounted(() => {
      product.value = products.find(product => product.id === props.id)
  })
  
  </script>