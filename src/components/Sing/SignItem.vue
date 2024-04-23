<script setup lang="ts">
import {defineProps} from 'vue';
import {Sign} from "../SignList/SignList.vue";

defineProps({
  signs: {
    type: Array as () => Sign[],
    required: true
  }
});
</script>

<template>
  <div
      class="rule flex justify-center border-2 p-4 max-w-52 max-h-52 relative dark:bg-white"
      v-for="sign in signs"
      :key="sign.number"
  >
    <div class="flex flex-col justify-around gap-2 items-center w-fit">
      <img
          width="120px"
          :src="sign.imageUrl"
          :alt="sign.title"
      >
      <span class="absolute top-1 left-1 text-2xl opacity-20 leading-7">{{ sign.number }}</span>
      <h1 class="text-center text-md font-bold break-words w-40 mob-m:w-32 laptop-m:w-full">{{ sign.title }}</h1>
    </div>
  </div>
</template>

<style scoped>
.rule {
  cursor: pointer;
  transition: transform .3s ease-in-out;
  border-radius: 16px;
  &:hover {
    transform: scale(1.03);
  }
}
</style>
