<template>
  <div class="grid grid-cols-9 p-16">
    <div 
      v-for="(item, key) in firstLine" :key="key"
      class="h-16 border-separate border-r-2 border-b-2"
      :class="
        key == 0 ? 'border-l-2 border-t-2': 'border-t-2'" 
      >
      <cell :item="item" :index="key"/>
    </div>
    <div 
      v-for="(item, key) in restLines" :key="key"
      class="h-16 border-separate border-r-2 border-b-2"
      :class="
        key % 9 == 0 ? 'border-l-2' : ''" 
      >
      <cell :item="item" :index="item.index"/>
    </div>
  </div>
  <guess/>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Guess from './Guess.vue'
import Cell from './Cell.vue'
import game from '../store/game'

export default defineComponent({
  name: 'Games',
  components: {
    Cell,
    Guess
  },
  setup: () => {
    const firstLine  = computed(() => game.current.matrix.slice(0, game.current.size))
    const restLines    = computed(() => game.current.matrix.slice(game.current.size))
    return { 
      firstLine,
      restLines,
    }
  }
})
</script>

<style scoped>
</style>
