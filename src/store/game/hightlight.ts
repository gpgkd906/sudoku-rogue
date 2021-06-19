import { computed } from 'vue'
import { state, setCurrentGame, isCurrentGameConfirmed } from "./model";

export const addHighlight = (target: number) => {
    if (isCurrentGameConfirmed.value) return;
    for (const cell of state.current.matrix) {
        if (cell.guess === target) {
            cell.highlight = true;
            break;
        }
    }
    state.current.highlights.push(target);
    setCurrentGame(state.current);
}

export const removeHighlight = (target: number) => {
    if (isCurrentGameConfirmed.value) return;
    for (const cell of state.current.matrix) {
        if (cell.guess === target) {
            cell.highlight = false;
            break;
        }
    }
    state.current.highlights = state.current.highlights.filter(number => number !== target);
    setCurrentGame(state.current);
}

export const toggleHighlight = (target: number) => {
    if (state.current.highlights.includes(target)) {
        removeHighlight(target);
    } else {
        addHighlight(target);
    }
}

export const clearHighlight = () => {
    state.current.highlights.length = 0;
}

export const highlights = computed(() => state.current.highlights);
