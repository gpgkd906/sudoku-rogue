<template>
  <div :class="bgColor" 
  class="w-full h-full text-xl font-extrabold flex items-center justify-center"
  @click="selectCell"
  >
  <span :class="textColor">{{item.guess}}</span>
  <small>[{{ item.answer }}]</small>
  <small v-if="eventLimit > 0">e: {{ eventLimit }}</small>
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
    const item = props.item;
    return {
      bgColor: computed(() => {
        let bgColor = '';
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
        if (item.highlight) {
          textColor = 'text-red-500';
        }
        if (item.confirmed && !item.fixed) {
          textColor = 'text-red-500';
        }
        return textColor;
      }),
      selectCell: () => game.selectCell(props.index),
      eventLimit: computed(() => {
        if (item.event) {
          return item.event.stepLimit - game.current.internalStep;
        }
        return 0;
      })
    }
  }
})
</script>

<style scoped>
</style>
