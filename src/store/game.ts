import { reactive, readonly } from 'vue'
import { SELECTABLE } from "./game/interface"
import * as game from "./game/model";
import * as select from "./game/select";
import * as snapshot from "./game/snapshot"
import * as highlight from "./game/hightlight";
import * as guess from "./game/guess";
import * as items from "./game/items";
import * as event from "./game/event";

export default {
    ...game,
    ...select,
    ...snapshot,
    ...highlight,
    ...guess,
    ...items,
    ...event,
    selectable: SELECTABLE,
    state: readonly(game.state),
}