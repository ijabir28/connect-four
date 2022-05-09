const {range} = require("./util");

const game_status = {
    player_zero_winner: 0,
    player_one_winner: 1,
    draw: 2,
    playing: 3
}

function is_valid_in_board(row_index, col_index, board) {
    return range(0, row_index).every(r => board[r][col_index] !== undefined);
}

function is_valid_range(row_index, col_index) {
    return is_valid_row_range(row_index) && is_valid_col_range(col_index);
}

function is_valid_col_range(col_index) {
    return 0 <= col_index && col_index <= 6;
}

function is_valid_row_range(row_index) {
    return 0 <= row_index && row_index <= 5;
}

function is_valid(row_index, col_index, board) {
    return is_valid_range(row_index, col_index) && is_valid_in_board(row_index, col_index, board);
}

function is_winner(board, player_no) {
    const row_indices = [0, 1, 2, 3, 4, 5];
    const col_indices = [0, 1, 2, 3, 4, 5, 6];

    const direction = [[0, +1], [+1, 0], [+1, +1], [+1, -1]];

    const offsets = [0, 1, 2, 3];

    return row_indices.some(row_index =>
        col_indices.some(col_index =>
            direction.some(([row_direction, col_direction]) =>
                offsets.every(offset => (
                        is_valid_range(row_index + offset * row_direction, col_index + offset * col_direction, board) &&
                        board[row_index + offset * row_direction][col_index + offset * col_direction] === player_no
                    )
                )
            )
        )
    );
}

function fill_up(board) {
    const row_indices = [0, 1, 2, 3, 4, 5];
    const col_indices = [0, 1, 2, 3, 4, 5, 6];

    return row_indices.every(row_index => col_indices.every(col_index => board[row_index][col_index] !== undefined));
}

function is_game_over(board) {
    return is_winner(board, 0) || is_winner(board, 1) || fill_up(board);
}

function game_result(board) {
    if(is_winner(board, 0)){ 
        return game_status.player_zero_winner;
    } else if(is_winner(board, 1)) {
        return game_status.player_one_winner;
    } else if(fill_up(board)) {
        return game_status.draw;
    } else {
        return game_status.playing;
    }
}

function place_move(board, player_no, col_index) {
    if(!is_valid_col_range(col_index)) {
        throw 'Invalid Move';
    }

    let row_index = 5;
    while (0 <= row_index && board[row_index][col_index] !== undefined) {
        row_index -= 1;
    }

    if (row_index < 0) {
        throw 'Invalid Move';
    }
    board[row_index][col_index] = player_no;
}

module.exports = {is_game_over, place_move, fill_up, is_valid_in_board, game_result};
