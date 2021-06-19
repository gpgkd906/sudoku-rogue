<template>
  <character-card :character="selectedCharacter" />
  <items-controller />
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
  <highlight-controller />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemsController from "./controllers/Items.vue";
import HighlightController from "./controllers/HightLight.vue"
import CharacterCard from "./cards/Character.vue";
import unit from "../store/unit";
import game from '../store/game'

export default defineComponent({
  name: 'Player',
  components: {
    ItemsController,
    HighlightController,
    CharacterCard,
  },
  setup: () => {
    return {
      player: unit.player,
      selectedCharacter: unit.selectedCharacter,
      startNewGame: game.startNewGame,
      backToLastSnapshot: game.backToLastSnapshot,
      cancelBack: game.cancelBack,
      snapShotCount: game.snapShotCount,
      guessNumber: game.guessNumber,
      gameTimer: game.gameTimer
    }
  }
})
</script>

<style scoped>
</style>
