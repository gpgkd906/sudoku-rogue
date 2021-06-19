<template>
  <h1 class="h-12">roguelike 数独</h1>
  <div class="grid grid-rows-6 grid-flow-col min-h-screen">
    <div class="row-span-full col-span-1"></div>
    <div class="row-span-5 col-span-2 border-8 border-blue-700 border-opacity-50">
      <Player />
    </div>
    <div class="row-span-5 col-span-6 border-t-2 border-r-2 border-b-2 border-red-500 border-opacity-40">
      <Games />
    </div>
    <div class="row-span-full col-span-1"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Player from "../components/Player.vue"
import Games from "../components/Games.vue"

export default defineComponent({
  name: 'Board',
  components: {
    Player,
    Games,
  },
})
</script>

<style scoped>
</style>
