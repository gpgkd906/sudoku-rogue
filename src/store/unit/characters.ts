import { computed, reactive, readonly, ref } from 'vue'

interface Character {
    code?: string
    image?: string
    description?: string
}


export const characters = readonly<Character[]>([
    {
        code: 'c1',
        image: 'https://octodex.github.com/images/gracehoppertocat.jpg',
        description: `
你是一名光荣的宇航员，你飞越了千万光年，游历了无数星球。
但是现在，你来到了一个从未见过的世界....
`
    },
    {
        code: 'c2',
        image: 'https://octodex.github.com/images/linktocat.jpg',
        description: `
你拯救过公主，也击败过魔王。
但是现在，你来到了一个从未见过的世界....
`
    },
    {
        code: 'c3',
        image: 'https://octodex.github.com/images/mountietocat.png',
        description: `
当你登上世界之巅，你相信你看见了别人从未见过的风景。
但是现在，你来到了一个从未见过的世界....
`
    },
    {
        code: 'c4',
        image: 'https://octodex.github.com/images/saint_nictocat.jpg',
        description: `
大家都喜欢你，所有的小孩子都盼着你的到来。
但是现在，你来到了一个从未见过的世界....
`
    },
]);

const selected: Character = reactive({});

export const selectCharacter = (character: Character) => {
    Object.assign(selected, character);
}

export const selectedCharacter = computed(() => selected);

export const isSelectedCharacter = (character: Character) => {
    return selected.code === character.code;
}

export const hasSelectedCharacter = computed(() => !!selected.code)