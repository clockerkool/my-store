import { ref } from 'vue'
import { defineStore } from 'pinia';


export const useCartStore = defineStore('cart', () => {
    const cart = ref([])

    const addToCart = (product) => {
        cart.value.push(product)
    }

    return { cart, addToCart }
})