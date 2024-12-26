<template>
  <div class="rating rating-lg rating-half" ref="ratingElement">
    <input disabled
      type="radio"
      name="rating-10"
      class="rating-hidden"
      :checked="true"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-1 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-2 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-1 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-2 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-1 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-2 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-1 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-2 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-1 bg-success"
    />
    <input disabled
      type="radio"
      name="rating-10"
      class="mask mask-star-2 mask-half-2 bg-success"
    />
    <div class="ms-6 flex justify-center items-end">
      <p class="text-2xl text-warning font-bold font-IBM">{{ rating }}</p>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, watch } from "vue";
  const ratingElement = ref(null);

  const props = defineProps({
    rating: { type: Number, required: false },
  });

  const stars = computed(() => {
    if(props.rating % 1 != 0) {
      return (Math.floor(props.rating * 2));
    } else {
      return props.rating * 2;
    }
  });

  watch(()=> props.rating, ()=>ratingElement.value.children[stars.value].checked = true)
</script>
