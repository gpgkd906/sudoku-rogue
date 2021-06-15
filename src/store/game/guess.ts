import { computed } from 'vue'
import { MayBeNumber, SELECTABLE, CLEAR_GUESS } from "./interface"
import { state, setCurrentGame } from "./model";
import { snapshotThenReset } from "./snapshot"

export const guess = (guess: MayBeNumber) => {
    const selected = state.current.selected;
    if (!selected) {
        return;
    }
    state.current.selected = undefined;
    // 同一个单元里选择同一个数字不记录任何操作
    if (selected.guess === guess) {
        return;
    }
    snapshotThenReset();
    if (typeof guess === 'number') {
        selected.guess = guess;
    } else {
        selected.guess = undefined;
    }
    setCurrentGame(state.current);
}

export const guessRange = computed(() => {
    if (!state.current.selected) {
        return [];
    }
    const select = state.current.selected;
    let included: any[] = [];
    // 同一行不重复的数字
    for (const cell of state.current.matrix) {
        if (cell.row === select.row || cell.col === select.col || cell.square === select.square) {
            included.push(cell.guess);
        }
    }
    included = included.filter(i => i);
    let range: (number|string)[] = SELECTABLE.filter(number => !included.includes(number));
    if (select.guess) {
        range.push(select.guess);
        range.push(CLEAR_GUESS)
    }
    range = Array.from(new Set(range));
    state.noChoice = false;
    if (range.length === 0) {
        state.noChoice = true
    }
    return range;
})