<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" :open="true">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <span class="inline-block h-screen align-middle" aria-hidden="true"></span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-0 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl ring-1 ring-yellow-400 ring-offset-yellow-200 ring-offset-1"
            >
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  选择填入的数字
                </p>
              </div>
              <div class="mt-4">
                <button
                  v-for="number in guessRange" :key="number"
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none"
                  @click="guess(number)"
                >
                  {{ number }}
                </button>
                <button v-show="guessRange.length === 0"></button>
                <button v-if="noChoice" @click="clearSelect()"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none"
                  >没有可以选择的数字</button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'
import game from '../store/game'

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
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
