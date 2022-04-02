function new_board() {
    return Array.from({length: 6}, () => Array(7).fill(0));
}

function start_game() {
    console.log('Game start....');
    const board = new_board();
    console.log(board);
}

start_game()
