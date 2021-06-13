import { reactive, readonly, computed } from 'vue'
import { makepuzzle, solvepuzzle, ratepuzzle } from "../plugins/sudoku.js"

type MayBeNumber = number | void;

export interface Cell {
    index: number,
    guess: MayBeNumber,
    answer: number,
    confirmed: boolean,
    fixed: boolean,
}

interface Game {
    puzzle: MayBeNumber[],
    solution: number[],
    matrix: Cell[],
    difficulty: number,
    size: number,
    selected: number | void,
}

interface State {
    current: Game,
    guess: MayBeNumber,
}

const toMatrix = (puzzle: MayBeNumber[], solution: number[]): Cell[] => {
    const matrix = [];
    for (const index in puzzle) {
        matrix.push({
            index: Number(index),
            guess: puzzle[index],
            answer: solution[index],
            confirmed: solution[index] === puzzle[index],
            fixed: solution[index] === puzzle[index],
        });
    }
    return matrix;
}

const createGame = (): Game => {
    const size          = 9
    const puzzle        = makepuzzle(size);
    const solution      = solvepuzzle(puzzle);
    const difficulty    = ratepuzzle(puzzle, 4);
    return {
        puzzle,
        solution,
        matrix: toMatrix(puzzle, solution),
        difficulty,
        size,
        selected: undefined,
    } 
}

const state: State = reactive({
    current: createGame(),
    guess: undefined,
})

const startNewGame = () => {
    state.current = createGame();
}

const selectCell = (key: number) => {
    console.log(key)
    const select = state.current.matrix[key];
    if (select && select.fixed === false) {
        state.current.selected = key;
    }
}

const guess = (number: number) => {
    state.current.selected = undefined;
    state.guess = number;
}

const isSelected = () => {
    return !!state.current.selected;
}

const guessRange = () => {
    if (!state.current.selected) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    const select = state.current.matrix[state.current.selected];
    console.log(select);

    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

export default {
    game: readonly(state),
    isSelected: computed(isSelected),
    startNewGame,
    selectCell,
    guess,
    guessRange: computed(guessRange)
}

