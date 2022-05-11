const {next_board, is_game_over, valid_moves, opponent} = require("./game");
const {heuristic} = require('./heuristic');

function move(board, player) {
    let max_score = Number.NEGATIVE_INFINITY;
    let max_move = undefined;

    for (const a_move of valid_moves(board)) {
        const a_score = mini_max(
            next_board(board, player, a_move),
            3,
            false,
            opponent(player)
        );

        if (max_score < a_score) {
            max_score = a_score;
            max_move = a_move;
        }
    }
    return max_move;
}

function mini_max(board, depth, isMaximizingPlayer, player) {
    if (depth === 0 || is_game_over(board)) {
        return heuristic(board, isMaximizingPlayer ? player : opponent(player));
    }

    if (isMaximizingPlayer) {
        let value = Number.NEGATIVE_INFINITY;
        for (const a_move of valid_moves(board)) {
            value = Math.max(
                value,
                mini_max(
                    next_board(board, player, a_move),
                    depth - 1,
                    false,
                    opponent(player)
                )
            );
        }
        return value;
    } else {
        let value = Number.POSITIVE_INFINITY;
        for (const a_move of valid_moves(board)) {
            value = Math.min(
                value,
                mini_max(
                    next_board(board, player, a_move),
                    depth - 1,
                    true,
                    opponent(player)
                )
            );
        }
        return value;
    }
}

module.exports = {move};
