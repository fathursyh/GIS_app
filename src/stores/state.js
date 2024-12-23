import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useState = defineStore('state', () => {
  const isFetched = ref(false);
  const mapCenter = { lat: -6.599394391283496, lng: 106.81235497704378 };
  
  const cafeData = ref([]);
  return { isFetched, mapCenter, cafeData }
})
