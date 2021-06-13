import { reactive, readonly } from 'vue'
import { makepuzzle, solvepuzzle, ratepuzzle } from "../plugins/sudoku.js"

const toMatrix = (puzzle: unknown[], solution: unknown[]) => {
    const matrix = [];
    for (const index in puzzle) {
        matrix.push({
            guess: puzzle[index],
            answer: solution[index],
            confirmed: solution[index] === puzzle[index]
        });
    }
    return matrix;
}


const createGame = () => {
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
    }
}

const state = reactive({
    current: createGame(),
})

const startNewGame = () => {
    state.current = createGame();
}

export default {
    game: readonly(state),
    startNewGame: startNewGame
}

