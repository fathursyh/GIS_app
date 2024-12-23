<template>
  <div>
    <web-navbar v-if="$route.name!='landing'"/>
    <transition name="fade">
      <RouterView />
    </transition>
  </div>
</template>

<script setup>
  import WebNavbar from './components/header/WebNavbar.vue';

</script>