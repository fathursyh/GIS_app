<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <!-- JUDUL -->
      <p class="btn btn-ghost text-xl xl:text-2xl font-IBM"><router-link to="/">Cafe Finder</router-link></p>
    </div>
    <div class="navbar-center hidden lg:flex">
        <!-- PC -->
      <ul class="menu menu-horizontal px-1 text-xl">
        <navbar-menu />
      </ul>
    </div>
    <div class="navbar-end">
      <!-- <a class="btn">Button</a> -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <!-- MOBILE -->
        <ul tabindex="0" class="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <navbar-menu />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
    import NavbarMenu from './NavbarMenu.vue';


</script>
