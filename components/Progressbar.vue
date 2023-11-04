<template>
  <footer class="absolute bottom-2 right-0 left-0 flex justify-center">
    <div class="w-100 relative h-1 bg-white rounded-full overflow-hidden">
      <span
        class="absolute h-full bg-black transition-all duration-400"
        :style="style"
      ></span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  current: number;
  total: number;
}>();

const style = computed(() => {
  return {
    width: `${100 / (props.total - 1)}%`,
    left: `${(100 / (props.total - 1)) * (props.current - 2)}%`,
  };
});
</script>
