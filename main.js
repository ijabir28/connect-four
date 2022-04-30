const {is_game_over, place_move} = require("./game.js");

const mock_moves = [
    [6, 2, 3, 2, 1, 1, 0],
    [6, 5, 4, 2, 3, 3, 3]
];

function new_board() {
    return Array.from({length: 6}, () => Array(7).fill(undefined));
}

function take_move_from_player(player_no) {
    return mock_moves[player_no].pop();
}

let player_no = 0;

function start_game() {
    console.log('Game start....');
    const board = new_board();
    console.table(board);

    while (0 < mock_moves[0].length || 0 < mock_moves[1].length) {
        try {
            const move = take_move_from_player(player_no);
            place_move(board, player_no, move);
            console.table(board);
            if(is_game_over(board)) {
                console.log("Player ", player_no, " wins !!!");
                break;
            }
            player_no = (player_no + 1) % 2;
        } catch (e) {
            console.error(e);
        }
    }
}

start_game()
