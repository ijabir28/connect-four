const row_indices = [0, 1, 2, 3, 4, 5];
const col_indices = [0, 1, 2, 3, 4, 5, 6];

const directions = [[0, +1], [+1, 0], [+1, +1], [+1, -1]];

const offsets = [0, 1, 2, 3];

const cells = row_indices.flatMap(row_index => col_indices.map(col_index => ([row_index, col_index])));

const segments = cells.flatMap(
    ([row_index, col_index]) =>
        directions.map(([row_direction, col_direction]) =>
            offsets.map(offset =>
                ([row_index + row_direction * offset, col_index + col_direction * offset])
            )
        )
).filter(is_valid_segment);

const score_by_frequency = [0, 1, 5, 20, Number.POSITIVE_INFINITY];

function is_valid_segment(segment) {
    return segment.every(is_valid_range);
}

function is_valid_range([row_index, col_index]) {
    return is_valid_row_range(row_index) && is_valid_col_range(col_index);
}

function is_valid_col_range(col_index) {
    return 0 <= col_index && col_index <= 6;
}

function is_valid_row_range(row_index) {
    return 0 <= row_index && row_index <= 5;
}

function heuristic(board) {
    return heuristic_of(board, 0) - heuristic_of(board, 1);
}

function heuristic_of(board, player) {
    return segments.reduce((current_sum, segment) => current_sum + score_of_segment(board, segment, player), 0);
}

function score_of_segment(board, segment, player) {
    let frequency = 0;

    for (const [row_index, col_index] of segment) {
        if(board[row_index][col_index] === opponent(player)) {
            frequency = 0;
            break;
        }

        if(board[row_index][col_index] === player) {
            frequency += 1;
        }
    }
    return score_by_frequency[frequency];
}

function opponent(player) {
    return (player + 1) % 2;
}

module.exports = {heuristic};