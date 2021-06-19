<template>
<div class="flex justify-between m-6 rounded h-auto" 
  :class="isSelectedCharacter(character) ? 'ring ring-blue-600 ring-offset-2': '' "
  @click="selectCharacter(character)">
  <div class="flex flex-col h-full max-w-lg mx-auto bg-gradient-to-r from-gray-800 via-blue-500 to-gray-800 rounded-lg">
      <img
      class="rounded-lg rounded-b-none"
      :src="character.image"/>
      <div class="py-2 px-4 mt-4">
      <h1 class="font-bold leading-6 tracking-wide text-gray-100">
          {{ character.description }}
      </h1>
      </div>
      <div class="flex flex-row items-end h-full w-full px-4 mt-4">
      </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import unit from "../../store/unit";

export default defineComponent({
  name: 'Character',
  props: {
    character: {
      type: Object,
      required: true,
    }
  },
  setup: () => {
    return { 
      selectCharacter: unit.selectCharacter,
      isSelectedCharacter: unit.isSelectedCharacter,
    }
  }

})
</script>

<style scoped>
</style>
