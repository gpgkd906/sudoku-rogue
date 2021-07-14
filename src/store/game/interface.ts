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
    event?: CellEvent,
}

export enum EventType {
    Item,
    Skill,
    // Score,
    // Time,
}

export interface CellEvent {
    name: string,
    type: EventType,
    isTriggered: boolean,
    isDisabled: boolean,
}

export interface Item {
    id: string,
    label: string,
    number: number, // 可使用次数
    count: number, // 使用次数
}

export interface Skill extends Item {
}

export interface Result {
    confirmed: boolean,
    success: boolean,
    wrongCount?: number,
    score: {
        difficulty: number,
        time: number,
        item: number,
        guess: number,
        total: number,
    }
}

export interface Game {
    score: number,
    matrix: Cell[],
    difficulty: number,
    size: number,
    internalStep: number,
    selected: Cell | void,
    snapshot: Array<Cell[]>,
    undoSnapshot: Array<Cell[]>,
    highlights: number[],
    timer: number,
    items: Item[],
    skills: Skill[],
    result: Result
}

export interface State {
    current: Game,
}

