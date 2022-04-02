const mock_moves = [1, 2, 3, 4, 5, 6];


function new_board() {
    return Array.from({length: 6}, () => Array(7).fill(0));
}

function take_move_from_player() {
    return mock_moves.pop();
}

function start_game() {
    console.log('Game start....');
    const board = new_board();
    console.log(board);

    while (true) {
        const move = take_move_from_player();
        console.log({move});
    }
}

start_game()
