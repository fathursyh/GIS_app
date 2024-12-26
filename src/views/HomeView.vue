<template>
  <div class="overflow-hidden max-h-[90vh]">
    <review-modal :mapIndex="mapIndex" />
    <google-maps @click-marker="getIndex" />
    <home-menu :mapIndex="mapIndex" v-show="isMapClicked" />
    <div v-show="!isMapClicked" class="w-full h-[40vh] flex flex-col items-center gap-6 justify-center text-center text-xl xl:text-4xl">
      <p>Hello,</p>
      <p>Pick your <span class="text-red-500 font-semibold">marker</span><img src="/gps.png" alt="" class="w-10 inline ps-2"></p>
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
