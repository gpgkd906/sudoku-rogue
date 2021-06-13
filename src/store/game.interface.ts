export type MayBeNumber = number | void;

export interface Cell {
    index: number,
    guess: MayBeNumber,
    answer: number,
    confirmed: boolean,
    fixed: boolean,
    row: number,
    col: number,
    square: number,
}

export interface Game {
    matrix: Cell[],
    difficulty: number,
    size: number,
    selected: number | void,
    snapshot: Array<Cell[]>
}

export interface State {
    current: Game,
    noChoice: boolean,
}