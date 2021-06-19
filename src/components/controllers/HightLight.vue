<template>
  <div class="grid grid-cols-3 gap-4">
      <div v-for="number in selectable" :key="number"
      @click="toggleHighlight(number)"
      class="bg-purple-300 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"
      :class="highlights.includes(number) ? 'ring-2 ring-blue-500': ''"
      >
        {{ number }}
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import game from '../../store/game'

export default defineComponent({
  name: 'Highlight',
  setup: () => {
    return {
      selectable: game.selectable,
      highlights: game.highlights,
      toggleHighlight: game.toggleHighlight,
    }
  }
})
</script>

<style scoped>
</style>
