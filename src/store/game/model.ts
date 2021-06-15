import { reactive, readonly, computed, toRaw } from 'vue'
import { MayBeNumber, Cell, Game, State, SELECTABLE, CLEAR_GUESS, CURRENT_GAME } from "./interface"
import { makepuzzle, solvepuzzle, ratepuzzle } from "../../plugins/sudoku.js"
import db from "../../plugins/db"


const store = db.createInstance({
    name: "game"
})

const decideSquare = (row: number, col: number): number => {
    switch (true) {
        case row < 3 && col < 3: 
            return 1;
        case row < 3 && col >= 3 && col < 6: 
            return 2;
        case row < 3 && col >= 6: 
            return 3;
        case row >= 3 && row < 6 && col < 3: 
            return 4;
        case row >= 3 && row < 6 && col >= 3 && col < 6: 
            return 5;
        case row >= 3 && row < 6 && col >= 6: 
            return 6;
        case row >= 6 && col < 3: 
            return 7;
        case row >= 6 && col >= 3 && col < 6: 
            return 8;
        case row >= 6 && col >= 6: 
            return 9;
        default: return 0;
    }
}

const createGame = (): Game => {
    const size          = 9
    const puzzle        = makepuzzle(size);
    const solution      = solvepuzzle(puzzle);
    const difficulty    = ratepuzzle(puzzle, 4);
    return {
        score: 0,
        difficulty,
        size,
        selected: undefined,
        snapshot: [],
        undoSnapshot: [],
        matrix: toMatrix(puzzle, solution),
        highlights: [],
    }
}

const toMatrix = (puzzle: MayBeNumber[], solution: number[]): Cell[] => {
    const matrix: Cell[] = [];
    // 現時点で生成されたsudokuを[1-9]配列に直す
    puzzle = puzzle.map(i => typeof i === 'number' ? i + 1: i);
    solution = solution.map(i => i + 1);
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
            highlight: false,
            row,
            col,
            square: decideSquare(row, col),
        });
    }
    return matrix;
}

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

export const setCurrentGame = (game: Game) => {
    store.setItem(CURRENT_GAME, toRaw(game));
};

export const startNewGame = () => {
    state.current = createGame();
    setCurrentGame(state.current);
}

export const state: State = reactive({
    current: await loadGame(),
    noChoice: false,
})

export const noChoice   = computed(() => state.noChoice);