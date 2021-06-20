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
      <button v-if="isClearable" @click="guess(null)"
        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none"
        >清除数字</button>
      <button v-if="isCloseable" @click="clearSelect()"
        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none"
        >返回棋盘</button>
      <button v-if="isNochoice" @click="clearSelect()"
        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none"
        >没有可以选择的数字</button>
      <button></button>
    </div>
  </Dialog>
</template>

<script>
import { computed } from "vue";
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
      selectedCell: game.selectedCell,
      isNochoice: computed(() => game.selectedCell.value && game.guessRange.value.length === 0),
      isClearable: computed(() => {
        if (game.selectedCell.value && game.guessRange.value.length > 0) {
          return game.guessRange.value.includes(game.selectedCell.value.guess)
        }
        return false;
      }),
      isCloseable: computed(() => {
        if (game.selectedCell.value && game.guessRange.value.length > 0) {
          return !game.guessRange.value.includes(game.selectedCell.value.guess)
        }
        return false;
      }),
    }
  },
}
</script>
