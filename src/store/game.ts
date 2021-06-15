import { readonly } from 'vue'
import { SELECTABLE } from "./game/interface"
import { state, startNewGame, noChoice } from "./game/model";
import * as select from "./game/select";
import * as snapshot from "./game/snapshot"
import * as highlight from "./game/hightlight";
import * as guess from "./game/guess"

export default {
    current: readonly(state.current),
    startNewGame,
    noChoice,
    ...select,
    ...snapshot,
    ...highlight,
    ...guess,
    selectable: SELECTABLE,
}