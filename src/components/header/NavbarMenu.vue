<template>
  <li @click="closeDropdown()"><router-link to="/home">Home</router-link></li>
  <li @click="closeDropdown()"><router-link to="/about">About</router-link></li>
  <li @click="closeDropdown()"><router-link to="/">Landing</router-link></li>
</template>

<script setup>
  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };
</script>
