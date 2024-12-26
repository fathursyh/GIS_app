<template>
  <div class="avatar">
    <div class="w-8 rounded-full">
      <img :src="url" referrerpolicy="no-referrer" alt="profile-image" />
    </div>
  </div>
</template>

<script setup>

defineProps({
  url: {type: String}
})
</script>
