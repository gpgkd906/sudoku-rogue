<template>
  <Dialog :isOpen="isOpen">
    <div class="mt-2">
      <p class="text-sm text-gray-500">
        填入数字或清除
      </p>
    </div>
    <div class="mt-4">
      <button
        v-for="number in guessRange" :key="number"
        type="button"
        class="inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none"
        :class="number !== '清除' ? 'text-blue-900 bg-blue-100 hover:bg-blue-200': 'text-red-900 bg-red-100 hover:bg-red-200'"
        @click="guess(number)"
      >
        {{ number }}
      </button>
      <button v-show="guessRange.length === 0"></button>
      <button v-if="noChoice" @click="clearSelect()"
        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none"
        >没有可以选择的数字</button>
    </div>
  </Dialog>
</template>

<script>
import Dialog from './utils/Dialog.vue'
import game from '../store/game'

export default {
  components: {
    Dialog,
  },

  setup() {
    return {
      isOpen: game.isSelected,
      guess: game.guess,
      guessRange: game.guessRange,
      clearSelect: game.clearSelect,
      noChoice: game.noChoice,
    }
  },
}
</script>
