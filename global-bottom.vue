<template>
  <!-- @vue-ignore -->
  <Progressbar
    v-if="
      $slidev.nav.currentPage !== 1 &&
      $slidev.nav.currentPage !== 2 &&
      $slidev.nav.currentPage !== 3 &&
      $slidev.nav.currentLayout !== 'end'
    "
    :current="
      //@ts-ignore
      $slidev.nav.currentPage
    "
    :total="$slidev.nav.total"
  />
</template>
