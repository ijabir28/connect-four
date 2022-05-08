const {is_game_over, place_move} = require("./game.js");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function new_board() {
    return Array.from({length: 6}, () => Array(7).fill(undefined));
}

function take_move_from_player(player_no) {
    return new Promise(resolve => {
        readline.question(`Player ${player_no}: `, resolve);
    });}

async function start_game() {
    console.log('Game start....');
    const board = new_board();
    let player_no = 0;

    while (!is_game_over(board)) {
        try {
            console.table(board);
            const move = await take_move_from_player(player_no);
            place_move(board, player_no, move);
            player_no = (player_no + 1) % 2;
        } catch (e) {
            console.error(e);
        }
    }
}

start_game().then(function () {
    console.log('Game Over');
})
