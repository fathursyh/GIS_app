<template>
  <main>
    <div class="hero min-h-screen bg-[url('/landing_bg.jpg')]">
      <div class="hero-overlay bg-opacity-80"></div>
        <div class="hero-content text-white text-center">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold font-IBM">Cafe Finder</h1>
            <p class="mb-5">
              Tempat terpercaya untuk mendapatkan rekomendasi kafe di sekitar
              Universitas Pakuan guna kebutuhan hangout atau bucin.
            </p>
            <router-link to="/home">
              <button class="btn btn-primary text-white px-12">
                Get Started
              </button>
            </router-link>
          </div>
        </div>
    </div>
  </main>
</template>
