<template>
  <div class="product-item">
    <img :src="product.image" :alt="product.name" class="w-10 h-10 object-contain" />
    <h3>{{ product.name }}</h3>
    <p>Цена: {{ product.price }}</p>
    <router-link :to="`/product/${product.id}`">Подробнее</router-link>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}
</style>