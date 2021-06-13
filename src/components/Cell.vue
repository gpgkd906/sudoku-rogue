<template>
  <div :class="bgColor()" 
  class="w-full h-full text-xl font-extrabold flex items-center justify-center"
  @click="selectCell"
  >
  <span :class="item.highlight ? 'text-red-500': ''">{{item.guess}}</span>
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
      bgColor: () => {
        let bgColor = '';
        bgColor = props.item.confirmed ? 'bg-green-200': bgColor;
        bgColor = props.item.highlight ? 'bg-red-200': bgColor;
        return bgColor;
      },
      selectCell: () => game.selectCell(props.index),
    }
  }
})
</script>

<style scoped>
</style>
