<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import SignItem from "../Sing/SignItem.vue";

const API_URL = 'https://3d7e4e9bd6c9a14e.mokky.dev/pdd-signs'
const signs = ref<SignCategory[]>([])

export interface Sign {
  title: string;
  number: string;
  shape: string;
  background_color: string;
  imageUrl: string;
  description: string;
  rule: string;
}

// Тип для категории знаков
interface SignCategory {
  category: string;
  quantity: number;
  signs: Sign[];
}

onMounted(async () => {
  try {
    const { data } = await axios.get(API_URL)
    signs.value = data;
  } catch (e) {
    console.error(e)
  }
})

</script>

<template>
  <div class="flex flex-wrap justify-center laptop:container laptop:grid laptop:grid-cols-6 mx-auto gap-4  m-2">
    <SignItem
        v-for="sign in signs"
        :key="sign.category"
        :signs="sign.signs"
    />
  </div>
</template>

<style scoped>

</style>
