import { reactive, readonly } from 'vue'

type Item = string;

interface Player {
    score: number,
    items: Item[]
}


const state:Player = reactive({
    score: 0,
    items: [
        "初始道具1",
        "初始道具2",
        "初始道具3",
    ],
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