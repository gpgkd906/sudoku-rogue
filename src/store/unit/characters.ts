import { computed, reactive, readonly, toRaw } from 'vue'
import db from "../../plugins/db"

interface Talents {

}

interface Character {
    code: string
    image: string
    description: string,
    rank: number,
    experience: number,
    telents: Talents[],
};

const store = db.createInstance({
    name: "characters"
});

const ALL_CHARACTER = 'allCharacter';
const CURRENT_CHARACTER = 'currentCharacter';

const NoneCharacter: Character = {
    code: '',
    image: '',
    description: '',
    rank: NaN,
    experience: NaN,
    telents: [],
}

const DEFAULT_CHARACTERS: Character[] = [
    {
        code: 'c1',
        image: 'https://octodex.github.com/images/gracehoppertocat.jpg',
        description: `
你是一名光荣的宇航员，你飞越了千万光年，游历了无数星球。
但是现在，你来到了一个从未见过的世界....
`,
        rank: 1,
        experience: 0,
        telents: [],
    },
    {
        code: 'c2',
        image: 'https://octodex.github.com/images/linktocat.jpg',
        description: `
你拯救过公主，也击败过魔王。
但是现在，你来到了一个从未见过的世界....
`,
        rank: 1,
        experience: 0,
        telents: [],
    },
    {
        code: 'c3',
        image: 'https://octodex.github.com/images/mountietocat.png',
        description: `
当你登上世界之巅，你相信你看见了别人从未见过的风景。
但是现在，你来到了一个从未见过的世界....
`,
        rank: 1,
        experience: 0,
        telents: [],
    },
    {
        code: 'c4',
        image: 'https://octodex.github.com/images/saint_nictocat.jpg',
        description: `
大家都喜欢你，所有的小孩子都盼着你的到来。
但是现在，你来到了一个从未见过的世界....
`,
        rank: 1,
        experience: 0,
        telents: [],
    },
];

export const characters = reactive<Character[]>(await store.getItem(ALL_CHARACTER) ?? DEFAULT_CHARACTERS);

const selected: Character = reactive<Character>(await store.getItem(CURRENT_CHARACTER) ?? NoneCharacter);

export const setCurrentCharacter = (character: Character) => {
    for (const c of characters) {
        if (c.code == character.code) {
            Object.assign(c, character);
            break;
        }
    }
    store.setItem(ALL_CHARACTER, toRaw(characters));
    store.setItem(CURRENT_CHARACTER, toRaw(character));
}

export const clearCurrentCharacter = () => {
    store.removeItem(CURRENT_CHARACTER);
}

export const selectCharacter = (character: Character) => {
    Object.assign(selected, character);
    setCurrentCharacter(selected as Character);
}

export const selectedCharacter = computed(() => selected);

export const isSelectedCharacter = (character: Character) => {
    return selected.code === character.code;
}

export const hasSelectedCharacter = computed(() => !!selected.code);

export const gainExperience = (experience: number) => {
    console.log('gainExperience', selected.experience, experience);
    selected.experience += experience;
    switch (true) {
        case selected.experience > 200000: selected.rank = 10; break;
        case selected.experience > 100000: selected.rank = 9; break;
        case selected.experience > 40000: selected.rank = 8; break;
        case selected.experience > 25000: selected.rank = 7; break;
        case selected.experience > 15000: selected.rank = 6; break;
        case selected.experience > 10000: selected.rank = 5; break;
        case selected.experience > 4000: selected.rank = 4; break;
        case selected.experience > 3000: selected.rank = 3; break;
        case selected.experience > 1000: selected.rank = 2; break;
        default: selected.rank = 1 ; break;
    }
    setCurrentCharacter(selected);
}