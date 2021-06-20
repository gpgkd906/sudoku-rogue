import { Skill, Game } from "./interface";

export const reloadSkill = (game: Game) => {
    game.skills.forEach(skill => {
        skill // skip
    });
}

export const resetSkill = (game: Game) => {
    game.skills.forEach(skill => {
        skill.count = 0;
    });
}