export const decideSquare = (row: number, col: number): number => {
    switch (true) {
        case row < 3 && col < 3: 
            return 1;
        case row < 3 && col >= 3 && col < 6: 
            return 2;
        case row < 3 && col >= 6: 
            return 3;
        case row >= 3 && row < 6 && col < 3: 
            return 4;
        case row >= 3 && row < 6 && col >= 3 && col < 6: 
            return 5;
        case row >= 3 && row < 6 && col >= 6: 
            return 6;
        case row >= 6 && col < 3: 
            return 7;
        case row >= 6 && col >= 3 && col < 6: 
            return 8;
        case row >= 6 && col >= 6: 
            return 9;
        default: return 0;
    }
}

export const takeSnapshot = <T>(matrix: T[]): T[] => {
    return matrix.map(item => {
        return {...item};
    })
}
