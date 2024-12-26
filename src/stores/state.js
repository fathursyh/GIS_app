import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useState = defineStore('state', () => {
  const isFetched = ref(false);
  const mapCenter = { lat: -6.599394391283496, lng: 106.81235497704378 };
  const api = ref(null);
  const cafeData = ref([]);
  return {api, isFetched, mapCenter, cafeData }
})
