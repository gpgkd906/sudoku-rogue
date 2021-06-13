import localforage from "localforage";

localforage.config({
    driver      : localforage.INDEXEDDB,
    name        : 'sudoku',
    version     : 1.0,
    storeName   : 'sudoku',
    description : 'games'
});

export default localforage;