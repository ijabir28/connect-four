const {next_board, is_game_over, valid_moves, opponent} = require("./game");
const {heuristic} = require('./heuristic');

const DEPTH = 6;
const ALPHA = Number.NEGATIVE_INFINITY;
const BETA = Number.POSITIVE_INFINITY;

function move(board, player) {
    return mini_max({node: board, player}).move;
}

function mini_max({node, player, depth = DEPTH, alpha = ALPHA, beta = BETA, isMaximizingPlayer = true}) {
    if (depth === 0 || is_game_over(node)) {
        return {score: heuristic(node, maximizing_player(player, isMaximizingPlayer))};
    }

    if (isMaximizingPlayer) {
        let current_max = {score: Number.NEGATIVE_INFINITY, move: undefined};

        for (const a_move of valid_moves(node)) {
            const child = next_board(node, player, a_move);
            current_max = max(
                current_max,
                {
                    move: a_move,
                    score: mini_max({
                            node: child,
                            depth: depth - 1,
                            alpha,
                            beta,
                            isMaximizingPlayer: false,
                            player: opponent(player)
                        }
                    ).score
                }
            );

            if (current_max.score >= beta) {
                break;
            }
            alpha = Math.max(alpha, current_max.score);
        }

        return current_max;
    } else {
        let current_min = {score: Number.POSITIVE_INFINITY, move: undefined};

        for (const a_move of valid_moves(node)) {
            const child = next_board(node, player, a_move);
            current_min = min(
                current_min,
                {
                    move: a_move,
                    score: mini_max({
                            node: child,
                            depth: depth - 1,
                            alpha,
                            beta,
                            isMaximizingPlayer: true,
                            player: opponent(player)
                        }
                    ).score
                }
            );

            if (current_min.score <= alpha) {
                break;
            }

            beta = Math.min(beta, current_min.score);
        }

        return current_min;
    }
}

function max(a, b) {
    return a.score < b.score ? b : a;
}

function min(a, b) {
    return a.score < b.score ? a : b;
}

function maximizing_player(player, isMaximizingPlayer) {
    return isMaximizingPlayer ? player : opponent(player);
}

module.exports = {move};
