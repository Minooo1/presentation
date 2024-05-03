<template>
    <div class="absolute z-50 bottom-5 left-0 right-0 flex justify-center">
        <div class="w-50 relative h-1 bg-green-500/50 rounded-full overflow-hidden">
            <span class="absolute h-full bg-gray-500 transition-all duration-300" :style="style"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  total: number,
  current: number
}>()

const style = computed(() => {
  console.log(">>>>>>>>>>> props", props)
  return {
    width: `${100 / (props.total - 1)}%`,
    left: `${100 / (props.total - 1) * (props.current - 2)}%`,
  }
});
</script>