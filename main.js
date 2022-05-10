const { is_game_over, place_move, game_result } = require("./game");
const ai = require('./ai');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const game_result_message = {
    0: "Player 0 win.",
    1: "Player 1 win.",
    2: "Draw.",
    3: "Playing..."
}

function new_board() {
    return Array.from({ length: 6 }, () => Array(7).fill(undefined));
}

function copy_board(board) {
    return [...board.map(row => [...row])];
}

async function take_move_from_player(player_no, board) {
    if (player_no === 0) {
        const x = ai.move(board);
        return x;
    }

    return new Promise(resolve => {
        readline.question(`Player ${player_no}: `, resolve);
    });
}

async function start_game() {
    console.log('Game start....');
    const board = new_board();
    let player_no = 0;

    while (!is_game_over(board)) {
        try {
            console.table(board);
            const move = await take_move_from_player(player_no, copy_board(board));
            place_move(board, player_no, move);
            player_no = (player_no + 1) % 2;
        } catch (e) {
            console.error(e);
        }
    }
    return { board, result: game_result(board) }
}

start_game().then(function ({ board }) {
    console.log('Game Over');
    console.log(game_result_message[game_result(board)]);
    console.table(board);
    readline.close();
})
