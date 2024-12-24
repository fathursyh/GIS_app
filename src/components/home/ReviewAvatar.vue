<template>
  <div class="avatar">
    <div class="w-8 rounded-full">
      <img :src="url" />
    </div>
  </div>
</template>

<script setup>

defineProps({
  url: {type: String}
})
</script>
