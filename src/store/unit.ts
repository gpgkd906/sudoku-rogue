import { reactive, readonly } from 'vue'
import { Unit } from "./unit.interface"

const player: Unit = reactive({
    point: 0,
    items: [
        "初始道具1",
        "初始道具2",
        "初始道具3",
    ],
});

const addItems = (item: string) => {
    player.items.push(item);
}

const addPoint = (point: number) => {
    player.point += point;
}

export default {
    player: readonly(player),
    addItems: addItems,
    addPoint: addPoint,
}