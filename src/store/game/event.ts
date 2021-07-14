import { Cell, CellEvent, Item, EventType, Game } from "./interface";
import { fetchItem } from "./items";

const randomEventType = (): EventType => {
    const enumValues = [
        ...Array(10).fill(EventType.Item),
        ...Array(3).fill(EventType.Skill),
    ]; // item: skill = 5 : 2
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
}

export const createEvent = (difficulty: number, items: Item[]) : CellEvent => {
    const type = randomEventType();
    let name: string = 'eventName';
    if (type === EventType.Item) {
        name = fetchItem().id;
    }
    return {
        name,
        type,
        isTriggered: false,
        isDisabled: false,
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
        const stepLimit: number = {
            0: 20,
            1: 40,
            2: 80,
            3: 120,
        }[game.difficulty] ?? 200;
        const diffSteps = stepLimit - game.internalStep;
        if (diffSteps < 0) {
            return false;
        }
        return true;
    }
    return false;
}

const triggerItemEvent = (event: CellEvent) => {
    console.log('triggerItemEvent', event);
}

const triggerSkillEvent = (event: CellEvent) => {
    console.log('triggerSkillEvent', event);
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