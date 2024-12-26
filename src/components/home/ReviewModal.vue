<template>
  <dialog id="my_modal_1" class="modal">
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    <div class="modal-box max-h-[60vh] rounded-sm" v-if="state.cafeData">
      <h3 class="text-lg font-bold mb-4">5 popular latest reviews</h3>
      <li
        v-for="(item, i) in state.cafeData[mapIndex]?.reviews"
        :key="i"
        class="py-4 list-none flex flex-col gap-1"
      >
        <div class="flex gap-2 items-start border-b border-gray-500 pb-2">
          <review-avatar :url="item.authorAttribution.photoURI" />
          <h5 class="font-bold max-w-36">
            {{ item.authorAttribution.displayName }}
          </h5>
          <p class="ms-auto text-xs font-thin tracking-wide text-blue-400">
            {{ item.relativePublishTimeDescription }}
          </p>
        </div>
        <p class="text-balance text-sm">{{ item.text }}</p>
      </li>
      <form method="dialog" class="flex justify-center mt-4">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-md btn-outline px-10">Close</button>
      </form>
    </div>
  </dialog>
</template>

<script setup>
  import ReviewAvatar from "./ReviewAvatar.vue";
  import { useState } from "@/stores/state";

  const state = useState();
  defineProps({
    mapIndex: { type: Number, default: 0 },
  });
</script>
