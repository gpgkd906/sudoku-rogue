import { computed } from 'vue'
import { state, setCurrentGame } from "./model";

export const addHighlight = (target: number) => {
    for (const cell of state.current.matrix) {
        if (cell.guess === target) {
            cell.highlight = true;
        }
    }
    state.current.highlights.push(target);
    setCurrentGame(state.current);
}

export const removeHighlight = (target: number) => {
    for (const cell of state.current.matrix) {
        if (cell.guess === target) {
            cell.highlight = false;
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

export const highlights = computed(() => state.current.highlights);
