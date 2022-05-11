const {segments} = require("./board");
const {opponent} = require("./game");


const score_by_frequency = [0, 1, 5, 20, Number.POSITIVE_INFINITY];

function heuristic(board, maximizingPlayer) {
    return heuristic_of(board, maximizingPlayer) - heuristic_of(board, opponent(maximizingPlayer));
}

function heuristic_of(board, player) {
    return segments.reduce((current_sum, segment) => current_sum + score_of_segment(board, segment, player), 0);
}

function score_of_segment(board, segment, player) {
    let frequency = 0;

    for (const [row_index, col_index] of segment) {
        if (board[row_index][col_index] === opponent(player)) {
            frequency = 0;
            break;
        }

        if (board[row_index][col_index] === player) {
            frequency += 1;
        }
    }
    return score_by_frequency[frequency];
}

module.exports = {heuristic};
