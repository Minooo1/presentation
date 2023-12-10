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

type TypeTree = {
  active: boolean;
  children: string[]
  hasActiveParent: boolean;
  hideInToc: boolean;
  level: number;
  path: string;
  title: string;
}

const hasTitle = computed(() => {
  //@ts-ignore
  const trees: TypeTree[] = $slidev.nav.tree;

  //@ts-ignore
  return trees.find(tree => tree.path === $slidev.nav.currentPath.replace("/", ""));
})
</script>
