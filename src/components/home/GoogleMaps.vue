<template>
  <div class="max-h-[90vh] overflow-hidden">
    <transition name="fade">
      <GoogleMap v-if="!isFetching" ref="maps" :api-key="api" style="width: 100%" :style="`height: ${mapHeight}`"
      :center="state.mapCenter" :clickableIcons="false" :zoom="15" :streetViewControl="false" :mapTypeControl="false"
      :fullscreenControl="false" :mapId="'map'" :min-zoom="15" :max-zoom="18" :restriction="restriction"
      @dragstart="mapHeight = '90vh'" @dragend="mapHeight = '50vh'" class="transition-all duration-150 ease-in-out">
      <MarkerCluster>
        <AdvancedMarker v-for="(location, i) in cafePlaces" @click="$emit('clickMarker', i)" :key="i" :options="{
          position: location.location,
          title: location.displayName,
          gmpClickable: true,
        }" />
      </MarkerCluster>
    </GoogleMap>
    <div class="absolute h-[90vh] w-screen flex justify-center items-center" v-else>
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    </transition>

  </div>
</template>

<script setup>
  import { useState } from "@/stores/state";
  import { computed, onBeforeMount, ref, watch } from "vue";
  import { GoogleMap, MarkerCluster, AdvancedMarker } from "vue3-google-map";
  const isFetching = ref(true);
  onBeforeMount(async () => {
    try {
      const res = await fetch('/api/serverless'); // Call the serverless function
      if (!res.ok) {
        throw new Error('Network response was not ok');
      } else {
        state.api = await res.text();
        setTimeout(() => {
          isFetching.value = false;
        }, 400);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.response = 'Error fetching data';
    }
  })
  defineEmits(["clickMarker"]);

  const api = computed(()=>{
      return state.api;
  });

  const state = useState();
  const cafePlaces = computed(() => {
    return state.cafeData;
  });
  const maps = ref(null);
  const mapHeight = ref("50vh");
  const restriction = {
    latLngBounds: {
      north: state.mapCenter.lat + 0.02,
      south: state.mapCenter.lat - 0.02,
      west: state.mapCenter.lng - 0.02,
      east: state.mapCenter.lng + 0.02,
    },
    strictBounds: true,
  };
  const fetchCafePlaces = async () => {
    const { Place, SearchNearbyRankPreference } =
      await maps.value.api.importLibrary("places");

    const request = {
      // required parameters
      fields: [
        "displayName",
        "location",
        "formattedAddress",
        "rating",
        "reviews",
      ],
      locationRestriction: {
        center: state.mapCenter,
        radius: 650,
      },
      // optional parameters
      includedPrimaryTypes: ["cafe", "coffee_shop"],
      maxResultCount: 20,
      rankPreference: SearchNearbyRankPreference.POPULARITY,
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
  watch(
    () => maps.value?.ready,
    (ready) => {
      if (ready && state.isFetched == false) fetchCafePlaces();
    }
  );
</script>
