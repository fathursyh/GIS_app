<template>
  <div class="flex items-center justify-center text-white">
    <div class="card glass w-full h-full rounded-none">
    <div class="card-body">
      <h2 class="card-title">{{ mapData?.displayName }}</h2>
      <p>{{ mapData?.formattedAddress }}</p>
      <maps-rating :rating="mapData?.rating"/>
      <div class="card-actions justify-end mt-6">
        <button class="btn btn-outline btn-success" onclick="my_modal_1.showModal()">Popular reviews</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
  import MapsRating from './MapsRating.vue';
import { useState } from '@/stores/state';
import { computed } from 'vue';

const state = useState();
  const props = defineProps({
    mapIndex: {type: Number, required: false}
  })

  const mapData = computed(()=> {
    return state.cafeData[props.mapIndex];
  });
</script>
