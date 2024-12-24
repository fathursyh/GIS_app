<template>
  <div class="max-h-[90vh] overflow-hidden">
    <GoogleMap
      ref="maps"
      :api-key="maps_api"
      style="width: 100%;"
      :style="`height: ${mapHeight}`"
      :center="state.mapCenter"
      :clickableIcons="false"
      :zoom="15"
      :streetViewControl="false"
      :mapTypeControl="false"
      :fullscreenControl="false"
      :mapId="'map'"
      @dragstart="mapHeight = '90vh'"
      @dragend="mapHeight = '50vh'"
      class="transition-all duration-150 ease-in-out"
    >
      <MarkerCluster>
        <AdvancedMarker
        v-for="(location, i) in cafePlaces"
        @click="$emit('clickMarker', i)"
          :key="i"
          :options="{
            position: location.location,
            title: location.displayName,
            gmpClickable: true
          }"
        />
      </MarkerCluster>
    </GoogleMap>
  </div>
</template>

<script setup>
const maps_api = import.meta.env.VITE_API_MAPS;
import { useState } from "@/stores/state";
import { computed, ref, watch } from "vue";
import { GoogleMap, MarkerCluster, AdvancedMarker } from "vue3-google-map";

defineEmits(['clickMarker']);

const state = useState();
const cafePlaces = computed(()=>{
  return state.cafeData;
});
const maps = ref(null);
const mapHeight = ref('50vh');

const fetchCafePlaces = async () => {
  const { Place, SearchNearbyRankPreference } = await maps.value.api.importLibrary(
    "places",
  );

  const request = {
    // required parameters
    fields: ["displayName", "location", "formattedAddress", "rating", "reviews"],
    locationRestriction: {
      center: state.mapCenter,
      radius: 800,
    },
    // optional parameters
    includedPrimaryTypes: ["cafe"],
    maxResultCount: 15,
    rankPreference: SearchNearbyRankPreference.NEARBY,
    language: "id",
  };

  const { places } = await Place.searchNearby(request);

  if (places.length) {
    places.forEach((place) => {
      state.cafeData.push(place);
      state.isFetched = true;
    });
  } else {
    console.log("No results");
  }
};

// watch for maps ready
watch(() => maps.value?.ready, (ready) => {
  if (ready && state.isFetched == false) fetchCafePlaces();
});
</script>
