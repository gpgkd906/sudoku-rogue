export type MayBeNumber = number | void;
export type Numeric = number | string;
export const CURRENT_GAME = 'current'
export const CLEAR_GUESS  = '清除'
export const SELECTABLE   = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export interface Cell {
    index: number,
    guess: MayBeNumber,
    answer: number,
    confirmed: boolean,
    fixed: boolean,
    highlight: boolean,
    row: number,
    col: number,
    square: number,
}

export interface Item {
    label: string,
    count: number,
}

export interface Skill {
    label: string,
}

export interface Game {
    score: number,
    matrix: Cell[],
    difficulty: number,
    size: number,
    selected: Cell | void,
    snapshot: Array<Cell[]>,
    undoSnapshot: Array<Cell[]>,
    highlights: number[],
    timer: number,
    items: Item[],
    skills: Skill[],
}

export interface State {
    current: Game,
    noChoice: boolean,
}

