<template>
  <div class="overflow-hidden max-h-[90vh]">
    <review-modal :mapIndex="mapIndex" />
    <google-maps @click-marker="getIndex" />
    <home-menu :mapIndex="mapIndex" v-show="isMapClicked" />
    <div v-show="!isMapClicked" class="w-full h-[40vh] flex items-center justify-center">
      <p class="text-xl text-red-600 font-openSans font-bold">Pilih marker pada peta.</p>
    </div>
  </div>
</template>

<script setup>
  import ReviewModal from '../components/home/ReviewModal.vue';
  import HomeMenu from "../components/home/HomeMenu.vue";
  import GoogleMaps from "../components/home/GoogleMaps.vue";
  import { ref } from "vue";
  const isMapClicked = ref(false);
  const mapIndex = ref(null);
  const getIndex = (e) => {
    mapIndex.value = e;
    isMapClicked.value = true;
  };
</script>
