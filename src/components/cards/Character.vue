<template>
<div class="max-w-sm mx-auto">
    <img :src="character.image"/>
    <span> 经验值 : </span><span>{{ player.experience }}</span>
    <span> 等级 : </span><span>{{ player.rank }}</span>
    <span> steps : </span><span>{{ snapShotCount }}</span>
    <span> rest : </span><span>{{ guessNumber }}</span>
    <span> timer : </span><span>{{ gameTimer }}</span>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import unit from '../../store/unit';
import game from '../../store/game'

export default defineComponent({
  name: 'CharacterCard',
  props: {
    character: {
      type: Object,
      required: true,
    }
  },
  setup: () => {
    return {
      player: unit.selectedCharacter,
      snapShotCount: game.snapShotCount,
      guessNumber: game.guessNumber,
      gameTimer: game.gameTimer
    }
  }
})
</script>

<style scoped>
</style>
