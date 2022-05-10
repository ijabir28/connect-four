const { place_move_next_board, is_game_over } = require("./game");
const {heuristic} = require('./heuristic');

const moves = [0, 1, 2, 3, 4, 5, 6];

function move(board) {
    let max_score = Number.NEGATIVE_INFINITY;
    let max_move = undefined;
    for (const a_move of moves) {
        const a_score = mini_max(
            place_move_next_board(board, 0, a_move), 
            3, false);
        if(max_score < a_score) {
            max_score = a_score;
            max_move = a_move;
        }
    }
    return max_move;
}

function mini_max(board, depth, maximizingPlayer) {
    if (depth === 0 || is_game_over(board)) {
        return heuristic(board);
    }

    if (maximizingPlayer) {
        const value = Number.NEGATIVE_INFINITY;
        for (const a_move of moves) {
            try {
                value = Math.max(value, 
                    mini_max(place_move_next_board(board, 0, a_move), depth - 1, false));
            } catch (e) {
                //just ingore
            }
        }
        return value;
    } else {
        const value = Number.POSITIVE_INFINITY;
        for (const a_move of moves) {
            try {
                value = Math.min(value, 
                    mini_max(place_move_next_board(board, 1, a_move), depth - 1, true));
            } catch (e) {
                //just ignore
            }
        }
        return value;
    }
}

module.exports = {move};