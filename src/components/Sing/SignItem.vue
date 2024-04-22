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
      class="rule flex justify-center"
      v-for="sign in signs"
      :key="sign.number"
  >
    <div class="rule__wrapper">
      <img
          :src="sign.imageUrl"
          :alt="sign.title"
      >
      <span class="rule__number">{{ sign.number }}</span>
      <h1>{{ sign.title }}</h1>
    </div>
  </div>
</template>

<style scoped>
.rule__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 24px;
  text-align: center;
  border: 2px solid black;
  border-radius: 16px;

  h1 {
    font-weight: 700;
  }

  img {
    @apply w-3/4
  }

  .rule__number {
    position: absolute;
    top: 8px;
    left: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: fantasy;
    font-size: 42px;
    color: rgba(0, 0, 0, 0.18);
  }

  @apply
  shadow-md
  w-60
  h-60
}
</style>
