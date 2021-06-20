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
    <button  @click="confirmGameResult()"
      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-400 bg-blue-900 rounded-md 
  disabled:bg-blue-200
  focus:outline-none" :disabled="!isAllGuessed"
      >检查结果</button>
  <guess/>
  <guess-result />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Guess from './Guess.vue'
import GuessResult from './GuessResult.vue';
import Cell from './Cell.vue'
import game from '../store/game'
import unit from '../store/unit'

export default defineComponent({
  name: 'Games',
  components: {
    Cell,
    Guess,
    GuessResult
  },
  setup: () => {
    const firstLine  = computed(() => game.current.matrix.slice(0, game.current.size))
    const restLines    = computed(() => game.current.matrix.slice(game.current.size))
    return { 
      firstLine,
      restLines,
      confirmGameResult: () => {
        game.confirmGameResult();
        unit.gainExperience(game.current.result.score.total);
      },
      isAllGuessed: game.isAllGuessed
    }
  }
})
</script>

<style scoped>
</style>
