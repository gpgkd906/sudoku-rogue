<template>
    <div :class="item.confirmed ? 'bg-green-200': ''" 
    class="w-full h-full text-xl font-extrabold flex items-center justify-center"
    @click="selectCell"
    >
    {{item.guess}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import game from "../store/game"


export default defineComponent({
  name: 'Games',
  props: {
      item: {
          type: Object,
          required: true
      },
      index: {
          type: Number,
          required: true
      }
  },
  setup (props) {
      return {
          selectCell: () => game.selectCell(props.index)
      }
  }
})
</script>

<style scoped>
</style>
