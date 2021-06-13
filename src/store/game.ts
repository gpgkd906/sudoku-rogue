import { reactive, readonly, computed, toRaw } from 'vue'
import { makepuzzle, solvepuzzle, ratepuzzle } from "../plugins/sudoku.js"
import { MayBeNumber, Cell, Game, State } from "./game.interface"
import db from "../plugins/db"
import { decideSquare } from "../plugins/sudoku.utils"

const store = db.createInstance({
    name: "game"
})

const toMatrix = (puzzle: MayBeNumber[], solution: number[]): Cell[] => {
    const matrix: Cell[] = [];
    for (let index in puzzle) {
        const idx = Number(index)
        const row = Math.floor(idx / 9)
        const col = idx % 9
        matrix.push({
            index: idx,
            guess: puzzle[idx],
            answer: solution[idx],
            confirmed: solution[idx] === puzzle[idx],
            fixed: solution[idx] === puzzle[idx],
            row,
            col,
            square: decideSquare(row, col),
        });
    }
    return matrix;
}

const CURRENT_GAME = 'current';

const createGame = (): Game => {
    const size          = 9
    const puzzle        = makepuzzle(size);
    const solution      = solvepuzzle(puzzle);
    const difficulty    = ratepuzzle(puzzle, 4);
    return {
        difficulty,
        size,
        selected: undefined,
        snapshot: [],
        matrix: toMatrix(puzzle, solution),
    }
}

const takeSnapshot = (game: Game): Game => {
    game.snapshot.push(
        game.matrix.map(item => {
            return {...item};
        })
    );
    return game;
}

const setCurrentGame = (game: Game) => {
    store.setItem(CURRENT_GAME, toRaw(game));
};

const loadGame = async () => {
    let game;
    game = await store.getItem<Game>(CURRENT_GAME);
    if (game) {
        return game;
    }
    game = createGame();
    setCurrentGame(game);
    return game;
}

const state: State = reactive({
    current: await loadGame(),
    noChoice: false,
})

const startNewGame = () => {
    state.current = createGame();
    console.log(state.current)
    setCurrentGame(state.current);
}

const clearSelect = () => {
    state.current.selected = undefined;
}

const selectCell = (key: number) => {
    const select = state.current.matrix[key];
    if (select && select.fixed === false) {
        state.current.selected = key;
    }
}

const guess = (guess: number) => {
    const selected = state.current.selected;
    if (!selected) {
        return;
    }
    state.current = takeSnapshot(state.current);
    state.current.matrix[selected].guess = guess;
    state.current.selected = undefined;
    setCurrentGame(state.current);
}

const backToLastSnapshot = () => {
    const last = state.current.snapshot.pop();
    if (last) {
        state.current.matrix = last;
    }
    setCurrentGame(state.current);
}

const isSelected = () => {
    return !!state.current.selected;
}

const guessRange = () => {
    if (!state.current.selected) {
        return [];
    }
    const select = state.current.matrix[state.current.selected];
    let included: any[] = [];
    // 同一行不重复的数字
    for (const cell of state.current.matrix) {
        if (cell.row === select.row || cell.col === select.col || cell.square === select.square) {
            included.push(cell.guess);
        }
    }
    included = included.filter(i => i);
    let range = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(number => !included.includes(number));
    if (select.guess) {
        range.push(select.guess);
    }
    range = Array.from(new Set(range));
    state.noChoice = false;
    if (range.length === 0) {
        state.noChoice = true
    }
    return range;
}

export default {
    game: readonly(state),
    isSelected: computed(isSelected),
    startNewGame,
    selectCell,
    clearSelect,
    guess,
    backToLastSnapshot,
    guessRange: computed(guessRange),
    noChoice: computed(() => state.noChoice)
}

