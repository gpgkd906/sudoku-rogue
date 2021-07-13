import { Cell, CellEvent, Item } from "./interface";



export const createEvent = (difficulty: number, items: Item[]) : CellEvent => {
    return {
        name: 'eventName',
        isTriggered: false,
        stepLimit: difficulty * 10,
    };
}

export const triggerEvent = (cell: Cell) => {
    const event = cell.event;
}

export const disableEvent = (cell: Cell) => {
    // console.log(cell);
}