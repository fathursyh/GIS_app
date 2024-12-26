<template>
  <li @click="closeDropdown()" :class="{'text-blue-500': $route.name == 'home'? true : false}"><router-link to="/home">Home</router-link></li>
  <li @click="closeDropdown()" :class="{'text-blue-500': $route.name == 'about'? true : false}"><router-link to="/about">About</router-link></li>
</template>

<script setup>
  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };
</script>
