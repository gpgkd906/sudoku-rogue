<template>
  <p>
    <span> Score : </span><span>{{ player.score }}</span>
  </p>
  <div class="grid grid-cols-2">
    <div class="w-full h-10 flex items-center justify-center"
      v-for="item in player.items" :key="item">
      {{item}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import unit from "../store/unit";

export default defineComponent({
  name: 'Player',
  setup: () => {
    return { 
      player: unit.player,
     }
  }
})
</script>

<style scoped>
</style>
