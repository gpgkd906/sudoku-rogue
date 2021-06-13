<template>
  <p>
    <span> Score : </span><span>{{ player.score }}</span>
  </p>
  <div class="grid grid-cols-2 aoto-col-max">
    <div class="w-24"
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
    console.log(unit.player)
    return { 
      player: unit.player,
     }
  }
})
</script>

<style scoped>
</style>
