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


function is_valid_segment(segment) {
    return segment.every(is_valid_cell);
}

function is_valid_cell([row_index, col_index]) {
    return is_valid_row_index(row_index) && is_valid_col_index(col_index);
}

function is_valid_col_index(col_index) {
    return 0 <= col_index && col_index <= 6;
}

function is_valid_row_index(row_index) {
    return 0 <= row_index && row_index <= 5;
}

module.exports = {segments, cells};
