const {is_game_over, place_move, game_result} = require("./game");
const ai = require('./ai');

const HUMAN_PLAYER = 0;
const AI_PLAYER = 1;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const game_result_message = {
    0: "You win.",//0 => Human Player.
    1: "AI wins.",//1 => AI Player.0
    2: "Draw.",
    3: "Playing..."
}

function new_board() {
    return Array.from({length: 6}, () => Array(7).fill(undefined));
}

function copy_board(board) {
    return [...board.map(row => [...row])];
}

async function take_move_from_player(player_no, board) {
    if (player_no === AI_PLAYER) {
        return ai.move(board, AI_PLAYER);
    }

    return Number.parseInt(await new Promise(resolve => {
        readline.question(`Player ${player_no}: `, resolve);
    }));
}

function print_board(board) {
    console.table(board.map(row => row.map(piece => piece === undefined ? '∅' : piece === 1 ? 'A' : 'H')));
}

async function start_game() {
    console.log('Game start....');
    const board = new_board();
    let player_no = 0;

    while (!is_game_over(board)) {
        try {
            print_board(board);
            const move = await take_move_from_player(player_no, copy_board(board));
            console.log(`AI's Move: `, move);
            place_move(board, player_no, move);
            player_no = (player_no + 1) % 2;
        } catch (e) {
            console.error(e);
        }
    }
    return {board, result: game_result(board)}
}

start_game()
    .then(function ({board}) {
        console.log('Game Over');
        console.log(game_result_message[game_result(board)]);
        print_board(board);
        readline.close();
    })
