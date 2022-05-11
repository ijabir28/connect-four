const {heuristic} = require('./heuristic')

const board = [
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [0, undefined, undefined, undefined, undefined, undefined, undefined],
    [0, undefined, undefined, undefined, undefined, undefined, 1],
];
console.log(heuristic(board, 0));
