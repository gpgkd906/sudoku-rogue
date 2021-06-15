import { state, setCurrentGame } from "./model";

const takeSnapshot = <T>(matrix: T[]): T[] => {
    return matrix.map(item => {
        return {...item};
    })
}

export const backToLastSnapshot = () => {
    const last = state.current.snapshot.pop();
    if (last) {
        state.current.undoSnapshot.push(takeSnapshot(state.current.matrix));
        state.current.matrix = last;
    }
    setCurrentGame(state.current);
}

export const cancelBack = () => {
    const last = state.current.undoSnapshot.pop();
    if (last) {
        state.current.snapshot.push(takeSnapshot(state.current.matrix));
        state.current.matrix = last;
    }
    setCurrentGame(state.current);
}

export const snapshotThenReset = () => {
    state.current.snapshot.push(takeSnapshot(state.current.matrix));
    state.current.undoSnapshot = [];
}