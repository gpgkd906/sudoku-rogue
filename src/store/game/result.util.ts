import { Game } from "./interface";

export const DEFAULT_ITEM_SCORE = 100;

export const calculateDifficultyScore = (difficulty: number):number => {
    difficulty = Math.floor(difficulty);
    switch (difficulty) {
        case 0: return 100;
        case 1: return 300;
        case 2: return 600;
        case 3: return 1000;
        case 4: return 1500;
        case 5: return 3000;
        default: return 3000;
    }
}

export const calculateTimeScore = (game: Game) => {
    const timer = game.timer || 0;
    switch (true) {
        case timer < 300: game.result.score.time = 3; return;
        case timer < 600: game.result.score.time = 2.5; return;
        case timer < 900: game.result.score.time = 2; return;
        case timer < 1200: game.result.score.time = 1.5; return;
        case timer < 1500: game.result.score.time = 1; return;
        default: game.result.score.time = 0.5; return;
    }
}

export const calculateItemScore = (game: Game) => {
    game.result.score.item = 2;
}

export const summaryResultScore = (game: Game) => {
    const score = game.result.score;
    if (game.result.success) {
        score.total = score.difficulty * score.item * score.time;
    } else {
        score.total = 0;
    }
    return Math.round(score.total);
}