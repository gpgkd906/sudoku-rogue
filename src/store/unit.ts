import { reactive, readonly } from 'vue'
import { Unit } from "./unit.interface"
import * as characters from './unit/characters';



const player: Unit = reactive({
    point: 0,
});

const addPoint = (point: number) => {
    player.point += point;
}

export default {
    player: readonly(player),
    addPoint: addPoint,
    ...characters
}