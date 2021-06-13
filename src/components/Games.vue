<template>
  <div class="grid grid-cols-9 p-16">
    <div 
      v-for="(item, key) in current.matrix.slice(0, current.size)" :key="key"
      class="h-16 border-separate border-r-2 border-b-2"
      :class="
        key == 0 ? 'border-l-2 border-t-2': 'border-t-2'" 
      >
      <cell :item="item" :index="key"/>
    </div>
    <div 
      v-for="(item, key) in current.matrix.slice(current.size)" :key="key"
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
import { defineComponent } from 'vue'
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
    return { 
      current: game.game.current,
      startNewGame: game.startNewGame,
    }
  }
})
</script>

<style scoped>
</style>
