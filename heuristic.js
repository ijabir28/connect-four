const {segments} = require("./board");
const {opponent} = require("./game");


const score_by_frequency = [0, 1, 5, 20, 1000];

function heuristic(board, maximizingPlayer) {
    return single_player_heuristic(board, maximizingPlayer) - single_player_heuristic(board, opponent(maximizingPlayer));
}

function single_player_heuristic(board, player) {
    let current_sum = 0;
    for (const segment of segments) {
        current_sum += score_of_segment(board, segment, player);
    }
    return current_sum;
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
