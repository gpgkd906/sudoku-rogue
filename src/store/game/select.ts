import { computed, readonly } from 'vue'
import { state, isCurrentGameConfirmed } from "./model";

export const selectCell = (key: number) => {
    if (isCurrentGameConfirmed.value) return;
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

export const selectedCell = computed(() => state.current.selected);