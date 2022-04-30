function is_valid(row_index, col_index) {
    return (0 <= row_index && row_index <= 5) && (0 <= col_index && col_index <= 6);
}

function is_game_over(board) {
    const row_indices = [0, 1, 2, 3, 4, 5];
    const col_indices = [0, 1, 2, 3, 4, 5, 6];

    const direction = [[0, +1], [+1, 0], [+1, +1], [+1, -1]];

    const offsets = [0, 1, 2, 3];

    return row_indices.some(row_index =>
        col_indices.some(col_index =>
            direction.some(([row_direction, col_direction]) =>
                offsets.every(offset => (
                        is_valid(row_index + offset * row_direction, col_index + offset * col_direction) &&
                        board[row_index + offset * row_direction][col_index + offset * col_direction] === 0
                    )
                )
            )
        )
    );
}

module.exports = {is_game_over};
