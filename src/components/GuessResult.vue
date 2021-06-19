<template>
  <Dialog :isOpen="isOpen">
    <h1>游戏结算</h1>
    <ul>
      <li>难度奖励: {{ result.score.difficulty }}</li>
      <li>时间奖励: {{ result.score.time }}</li>
      <li>道具奖励: {{ result.score.item }}</li>
      <li>额外奖励: {{ result.score.event }}</li>
      <li class="border-t-2 border-gray-900">结算: {{ result.score.total }}</li>
    </ul>
    <button  @click="startNewGame()"
      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none"
      >开始新游戏</button>
    <button  @click="backTop()"
      class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 rounded-md hover:bg-green-200 focus:outline-none"
      >返回游戏入口</button>
  </Dialog>
</template>

<script>
import Dialog from './utils/Dialog.vue'
import game from '../store/game'
import router, { Paths } from "../router";

export default {
  components: {
    Dialog,
  },

  setup() {
    return {
      isOpen: game.isCurrentGameConfirmed,
      result: game.gameResult,
      startNewGame: game.startNewGame,
      backTop: () => {
        router.replace(Paths.top);
      },
    }
  },
}
</script>
