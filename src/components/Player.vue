<template>
  <p>
    <span> Score : </span><span>{{ player.score }}</span>
  </p>
  <div class="grid grid-cols-2">
    <div class="w-full h- flex items-center justify-center"
      v-for="item in player.items" :key="item">
      {{item}}
    </div>
  </div>
  <div class="grid">
    <button  @click="startNewGame()"
      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none"
      >开始新游戏</button>
    <button  @click="backToLastSnapshot()"
      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 rounded-md hover:bg-green-200 focus:outline-none"
      >回退上一步</button>
    <button  @click="cancelBack()"
      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-purple-900 bg-purple-100 rounded-md hover:bg-purple-200 focus:outline-none"
      >取消回退</button>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import unit from "../store/unit";
import game from '../store/game'

export default defineComponent({
  name: 'Player',
  setup: () => {
    return { 
      player: unit.player,
      startNewGame: game.startNewGame,
      backToLastSnapshot: game.backToLastSnapshot,
      cancelBack: game.cancelBack,
     }
  }
})
</script>

<style scoped>
</style>
