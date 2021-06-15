import { computed } from 'vue'
import { state } from "./model";

export const selectCell = (key: number) => {
    const select = state.current.matrix[key];
    if (select && select.fixed === false) {
        state.current.selected = select;
    }
}

export const isSelected = computed(() => {
    return !!state.current.selected;
})

export const clearSelect = () => {
    state.current.selected = undefined;
}