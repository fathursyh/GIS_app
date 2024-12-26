<template>
  <div class="h-screen w-full">
    <transition name="fade" mode="in-out">
      <web-navbar class="transition-all duration-150" v-if="$route.name!='landing'"/>
    </transition>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
  </div>
</template>

<script setup>
  import WebNavbar from './components/header/WebNavbar.vue';

</script>
