import { Item } from "../interface";

export const avalidableItems:Item[] = Array(100).fill(void 0).map((_, index) => {
    return {
        id: `item${index}`,
        label: `item${index}`,
        number: 3, // 可使用次数
        count: 0, // 使用次数
    }
});

export const applyItem = (item: Item) => {
}