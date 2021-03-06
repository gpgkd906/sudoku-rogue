import { computed, reactive, toRaw } from 'vue'
import { MayBeNumber, SELECTABLE, CLEAR_GUESS } from "./interface"
import { state, setCurrentGame } from "./model";
import { clearSelect } from "./select";
import { snapshotThenReset, clearSnapshot } from "./snapshot"
import { clearHighlight } from "./hightlight"
import { calculateTimeScore, calculateItemScore, summaryResultScore, calculateConfirmCell } from "./calculator";
import { triggerEvent, disableEvent } from "./event";

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
    }
    range = Array.from(new Set(range));
    return range;
});

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
        selected.confirmed = false;
    }
    state.current.internalStep += 1;
    setCurrentGame(state.current);
}

export const confirmCell = () => {
    const selected = state.current.selected;
    if (!selected) {
        return;
    }
    if (selected.guess === selected.answer) {
        selected.confirmed = true;
        selected.fixed = true;
        triggerEvent(state.current, selected);
    } else {
        selected.confirmed = true;
        selected.fixed = false;
        disableEvent(selected);
    }
    calculateConfirmCell(state.current, selected);
    clearSelect();
}

export const confirmGameResult = () => {
    let result = true;
    for (const cell of state.current.matrix) {
        if (cell.answer !== cell.guess) {
            result = false;
        }
    }
    state.current.result.confirmed = true;
    state.current.result.success = result;
    calculateTimeScore(state.current);
    calculateItemScore(state.current);
    summaryResultScore(state.current);
    clearSnapshot();
    clearHighlight();
}

export const guessNumber = computed(() => state.current.matrix.filter(i => !i.guess).length);
export const isAllGuessed = computed(() => guessNumber.value === 0);