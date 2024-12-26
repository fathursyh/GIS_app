<template>
  <div
    class="flex md:items-center md:justify-center gap-0 md:gap-6 flex-col pt-10 h-[90%] bg-[url(https://wallpapersok.com/images/hd/geometric-android-stock-j4lw2800uo4zsjqm.jpg)]"
    :class="{blur: blur}"
    style="transition: all 0.8s ease;"
  >
    <h3
      class="text-2xl xl:text-4xl font-bold text-center stat-title text-white"
    >
      About Us
    </h3>
    <div
      class="stats stats-vertical lg:stats-horizontal shadow-md scale-90 xl:scale-110"
    >
      <div class="stat">
        <div class="stat-title">Coffee Reviewer</div>
        <div class="stat-value">Fathur Syah</div>
        <div class="stat-desc">065122057</div>
      </div>

      <div class="stat">
        <div class="stat-title">Cafe Interior Reviewer</div>
        <div class="stat-value">Muhamad Fadil</div>
        <div class="stat-desc">065122002</div>
      </div>

      <div class="stat">
        <div class="stat-title">Dessert Reviewer</div>
        <div class="stat-value">Dadan Ramdhani</div>
        <div class="stat-desc">065122021</div>
      </div>

      <div class="stat">
        <div class="stat-title">Food Reviewer</div>
        <div class="stat-value">Rizky Noval</div>
        <div class="stat-desc">065122025</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";

  const blur = ref(true);
  onMounted(() => {
    setTimeout(() => {
      blur.value = false;
    }, 400);
  });
</script>
