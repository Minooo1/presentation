<template>
  <footer class="absolute top-0 left-0">
    <Titles v-if="hasTitle" :no="//@ts-ignore
    $slidev.nav.currentPage" />
  </footer>
</template>

<script setup lang="ts">
//@ts-ignore
import Titles from "/@slidev/titles.md";
import { computed } from "vue";

const needTitlePageNumbers = [6,7,8,10,11,12,15,16] as const

const hasTitle = computed(() => {
  //@ts-ignore
  return needTitlePageNumbers.includes($slidev.nav.currentPage as number);
})
</script>
