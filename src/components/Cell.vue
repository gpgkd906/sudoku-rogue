<template>
  <div :class="bgColor" 
  class="w-full h-full text-xl font-extrabold flex items-center justify-center"
  @click="selectCell"
  >
  <span :class="item.highlight ? 'text-red-500': ''">{{item.guess}}</span>
  <small>[{{ item.answer }}]</small>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
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
      bgColor: computed(() => {
        let bgColor = '';
        if (game.current.result.confirmed) {
          bgColor = props.item.answer === props.item.guess ? 'bg-green-200': 'bg-red-200';
        } else {
          bgColor = props.item.confirmed ? 'bg-green-200': bgColor;
          bgColor = props.item.highlight ? 'bg-red-200': bgColor;
        }
        return bgColor;
      }),
      selectCell: () => game.selectCell(props.index),
    }
  }
})
</script>

<style scoped>
</style>
