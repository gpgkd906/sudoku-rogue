import { Cell, CellEvent, Item, EventType, Game } from "./interface";
  
const randomEnum = <T>(enumType: T): T[keyof T] => {
    const enumValues = Object.keys(enumType)
        .map(n => Number.parseInt(n))
        .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
}

export const createEvent = (difficulty: number, items: Item[]) : CellEvent => {
    return {
        name: 'eventName',
        type: randomEnum(EventType),
        isTriggered: false,
        isDisabled: false,
        stepLimit: difficulty * 10,
    };
}

export const isValidEvent = (game:Game, event?: CellEvent) => {
    if (event) {
        if (event.isTriggered) {
            return false;
        }
        if (event.isDisabled) {
            return false;
        }
        const diffSteps = event.stepLimit - game.internalStep;
        if (diffSteps < 0) {
            return false;
        }
        return true;
    }
    return false;
}

const triggerItemEvent = (event: CellEvent) => {
    console.log('triggerItemEvent');
}

const triggerSkillEvent = (event: CellEvent) => {
    console.log('triggerSkillEvent');
}

export const triggerEvent = (game:Game, cell: Cell) => {
    const event = cell.event ?? null;
    if (event) {
        if (isValidEvent(game, cell.event)) {
            switch (event.type) {
                case EventType.Item: triggerItemEvent(event); break;
                case EventType.Skill: triggerSkillEvent(event); break;
            } 
        }
    }
}

export const disableEvent = (cell: Cell) => {
    if (cell.event) {
        cell.event.isDisabled = true;
    }
}