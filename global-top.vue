<template>
  <footer class="absolute top-0 left-3">
    <Titles v-if="hasTitle" :no="//@ts-ignore
    $slidev.nav.currentPage" class="font-bold border-solid border-b-4 border-b-[#56ffff] pb-2" />
  </footer>
</template>

<script setup lang="ts">
//@ts-ignore
import Titles from "/@slidev/titles.md";
import { computed } from "vue";

const notNeedTitlePageNumbers = [1,3,4,5,10,19,22] as const

const hasTitle = computed(() => {
  //@ts-ignore
  return !notNeedTitlePageNumbers.includes($slidev.nav.currentPage as number);
})
</script>
