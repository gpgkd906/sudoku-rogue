<template>
  <div :class="bgColor" 
  class="w-full h-full text-xl font-extrabold flex items-center justify-center"
  @click="selectCell"
  >
  <span :class="textColor">{{item.guess}}</span>
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
        const item = props.item;
        if (game.current.result.confirmed) {
          bgColor = item.answer === item.guess ? 'bg-green-200': 'bg-red-200';
        } else {
          if (item.confirmed) {
            switch (true) {
              case item.highlight: bgColor ='bg-yellow-200'; break;
              case item.fixed: bgColor ='bg-green-200'; break;
              default: bgColor ='bg-red-200'; break;
            }
          } 
        }
        return bgColor;
      }),
      textColor: computed(() => {
        let textColor = '';
        const item = props.item;
        console.log(item.confirmed && !item.fixed);
        if (item.highlight) {
          textColor = 'text-red-500';
        }
        if (item.confirmed && !item.fixed) {
          textColor = 'text-red-500';
        }
        return textColor;
      }),
      selectCell: () => game.selectCell(props.index),
    }
  }
})
</script>

<style scoped>
</style>
