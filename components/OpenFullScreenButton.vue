<template>
  <button type="button" @click="openFullScreen">全画面表示</button>
</template>

<script setup lang="ts">
const openFullScreen = () => {
  const iframe = document.getElementById('iframe');
  if (!iframe) return;

  iframe.requestFullscreen();
}
</script>