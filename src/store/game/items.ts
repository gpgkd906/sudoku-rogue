import { reactive, computed, readonly } from 'vue'
import { Item } from "./interface";
import { avalidableItems, applyItem } from './items/index';

type ItemStore = {
    avalidableItems: Item[],
    items: Item[],
    fetchIndex: number
}

const store:ItemStore = reactive<ItemStore>({
    avalidableItems,
    items: [],
    fetchIndex: 0,
});

export const reInitItems = () => {
    console.log('reInitItems', avalidableItems);
    store.items = store.avalidableItems; // add shuffle later
    store.fetchIndex = 0;
    return store.items;
}

export const useItem = (item: Item) => {
    if (item.count < item.number) {
        applyItem(item);
        item.count + 1;
    }
}

export const fetchItem = () => {
    const item = store.items[store.fetchIndex];
    store.fetchIndex += 1;
    console.log('fetchItem', item)
    return item;
}