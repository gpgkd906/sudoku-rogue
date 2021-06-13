<template>
    <div :class="item.confirmed ? 'bg-green-200': ''" class="w-full h-full text-xl font-extrabold flex items-center justify-center">
    {{item.guess}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Games',
  props: {
      item: {
          type: Object,
          required: true
      }
  }
})
</script>

<style scoped>
</style>
