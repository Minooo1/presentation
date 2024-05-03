<template>
  <Progress
    v-if="//@ts-ignore
      $slidev.nav.currentPage !== 1 && $slidev.nav.currentLayout !== 'end'"
    :current="//@ts-ignore
      $slidev.nav.currentPage"
    :total="$slidev.nav.total" />
</template>