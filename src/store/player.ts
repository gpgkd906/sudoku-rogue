import { reactive, readonly } from 'vue'

type Item = string;

interface Player {
    score: number,
    items: Item[]
}


const state:Player = reactive({
    score: 0,
    items: [],
});

const addItems = (item: string) => {
    state.items.push(item);
}

const addScore = (score: number) => {
    state.score += score;
}

export default {
    player: readonly(state),
    addItems: addItems,
    addScore: addScore,
}