<template>
  <h1 class="leading-6 tracking-wide font-extrabold text-3xl">
      选择一个角色开始你的游戏
  </h1>
  <div class="flex">
    <div class="flex-1" v-for="character in characters" :key="character.code">
      <character :character="character" />
    </div>
  </div>
  <button  @click="startNewGame()"
  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-200 bg-red-900 rounded-md 
  disabled:bg-red-100 diabled:text-red-900
  focus:outline-none" :disabled="!hasSelectedCharacter"
  >开始新游戏</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Character from "../components/Character.vue"
import unit from "../store/unit";
import game from "../store/game";
import router, { Paths } from "../router";

export default defineComponent({
  name: 'Characters',
  components: {
      Character
  },
  setup: () => {
    return { 
      characters: unit.characters,
      hasSelectedCharacter: unit.hasSelectedCharacter,
      startNewGame: async () => {
        game.startNewGame();
        router.replace(Paths.board);
      }
    }
  }
})
</script>

<style scoped>
</style>
