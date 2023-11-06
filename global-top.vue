<template>
  <footer class="absolute top-3 left-3">
    <Titles v-if="hasTitle" :no="//@ts-ignore
    $slidev.nav.currentPage" class="font-bold border-solid border-b-4 border-b-[#56ffff] pb-2" />
  </footer>
</template>

<script setup lang="ts">
//@ts-ignore
import Titles from "/@slidev/titles.md";
import { computed } from "vue";

const needTitlePageNumbers = [2,6,7,8,10,11,12,15,16] as const

const hasTitle = computed(() => {
  //@ts-ignore
  return needTitlePageNumbers.includes($slidev.nav.currentPage as number);
})
</script>
