<template>
  <div class="grid grid-cols-2">
    <div class="w-full h- flex items-center justify-center"
      v-for="item in game.items" :key="item">
      {{item}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import game from '../../store/game'

export default defineComponent({
  name: 'Items',
  setup: () => {
    return {
      game: game.current,
    }
  }
})
</script>

<style scoped>
</style>
