const {is_game_over, place_move, fill_up} = require("./game.js");
const {is_valid_in_board} = require("./game");

describe('game_over', function () {
    it('should be correct', function () {
        [
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [   0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [     0   , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [   0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined,    0     , undefined, undefined, undefined, undefined, undefined],
                    [undefined,    0     , undefined, undefined, undefined, undefined, undefined],
                    [undefined,    0     , undefined, undefined, undefined, undefined, undefined],
                    [undefined,    0     , undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined,    0     , undefined, undefined, undefined, undefined, undefined],
                    [undefined,    0     , undefined, undefined, undefined, undefined, undefined],
                    [undefined,    0     , undefined, undefined, undefined, undefined, undefined],
                    [undefined,    0     , undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined,     0     , undefined, undefined, undefined, undefined],
                    [undefined, undefined,     0     , undefined, undefined, undefined, undefined],
                    [undefined, undefined,     0     , undefined, undefined, undefined, undefined],
                    [undefined, undefined,     0     , undefined, undefined, undefined, undefined],
                    [undefined, undefined,  undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined,  undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined,     0    ,  undefined, undefined, undefined],
                    [undefined, undefined, undefined,     0    ,  undefined, undefined, undefined],
                    [undefined, undefined, undefined,     0    ,  undefined, undefined, undefined],
                    [undefined, undefined, undefined,     0    ,  undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined,  undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined,  undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined,  undefined,      0    , undefined, undefined],
                    [undefined, undefined, undefined,  undefined,      0    , undefined, undefined],
                    [undefined, undefined, undefined,  undefined,      0    , undefined, undefined],
                    [undefined, undefined, undefined,  undefined,      0    , undefined, undefined],
                    [undefined, undefined, undefined,  undefined,  undefined, undefined, undefined],
                    [undefined, undefined, undefined,  undefined,  undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined,      0    , undefined],
                    [undefined, undefined, undefined, undefined, undefined,      0    , undefined],
                    [undefined, undefined, undefined, undefined, undefined,      0    , undefined],
                    [undefined, undefined, undefined, undefined, undefined,      0    , undefined],
                    [undefined, undefined, undefined, undefined, undefined,  undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined,  undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                ],
                result: true
            },
            {
                board: [
                    [    0,     undefined,     0,        0,         0,      undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [    0,         0,          0,        0,     undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined,      0,          0,        0,       0,      undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined,      0,          0,        0,       0     , undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined,      0,          0,        0,       0     , undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined,      0,          0,        0,       0     , undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined,      0,          0,        0,    undefined,      0   , undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: false
            },
            {
                board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined,     0    , undefined, undefined],
                    [undefined, undefined, undefined,     0    , undefined, undefined, undefined],
                    [undefined, undefined,    0     , undefined, undefined, undefined, undefined],
                    [undefined,      0   , undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                result: true
            }
        ].forEach(function ({board, result}) {
            expect(is_game_over(board)).toBe(result);
        })
    });
});

describe('place_move', function () {
    it('should be correct', function () {
        [
            {
                current_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                player_no: 0,
                move: 0,
                next_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [0, undefined, undefined, undefined, undefined, undefined, undefined],
                ]
            },
            {
                current_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                player_no: 0,
                move: 1,
                next_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, 0, undefined, undefined, undefined, undefined, undefined],
                ]
            },
            {
                current_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                player_no: 0,
                move: 2,
                next_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, 0, undefined, undefined, undefined, undefined],
                ]
            },
            {
                current_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                player_no: 0,
                move: 3,
                next_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, 0, undefined, undefined, undefined],
                ]
            },
            {
                current_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                player_no: 0,
                move: 4,
                next_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined,     0    , undefined, undefined],
                ]
            },
            {
                current_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                player_no: 0,
                move: 5,
                next_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined,     0    , undefined],
                ]
            },
            {
                current_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                player_no: 0,
                move: 6,
                next_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined,     0    ],
                ]
            },
            {
                current_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                ],
                player_no: 0,
                move: 0,
                next_board: [
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0     , undefined, undefined, undefined, undefined, undefined, undefined],
                    [    0    , undefined, undefined, undefined, undefined, undefined, undefined],
                ]
            },
            {
            current_board: [
                [undefined, undefined,  undefined, undefined, undefined, undefined, undefined],
                [undefined,    0    ,  undefined, undefined, undefined, undefined, undefined],
                [undefined,    0    ,  undefined, undefined, undefined, undefined, undefined],
                [undefined,    0    ,  undefined, undefined, undefined, undefined, undefined],
                [undefined,    0    ,  undefined, undefined, undefined, undefined, undefined],
                [undefined,    0    ,  undefined, undefined, undefined, undefined, undefined],
            ],
            player_no: 0,
            move: 1,
            next_board: [
                [undefined,     0    , undefined, undefined, undefined, undefined, undefined],
                [undefined,     0    , undefined, undefined, undefined, undefined, undefined],
                [undefined,     0    , undefined, undefined, undefined, undefined, undefined],
                [undefined,     0    , undefined, undefined, undefined, undefined, undefined],
                [undefined,     0    , undefined, undefined, undefined, undefined, undefined],
                [undefined,     0    , undefined, undefined, undefined, undefined, undefined],
            ]
        }
        ].forEach(({current_board, player_no, move, next_board}) => {
            place_move(current_board, player_no, move);
            expect(current_board).toStrictEqual(next_board);
        });
    });
});

describe('fill_up', function () {
    it('should be correct', function () {
        expect(fill_up([
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        ])).toBe(false);

        expect(fill_up([
            [0 , 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ])).toBe(true);

        expect(fill_up([
            [0 , 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ])).toBe(true);

        expect(fill_up([
            [1 , 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ])).toBe(true);

        expect(fill_up([
            [0 , 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, undefined, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ])).toBe(false);
    });
});

describe('is_valid_in_board', function () {
    it('should be correct', function () {
        expect(is_valid_in_board(0, 0, [
            [0 , 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ])).toBe(false)
    });
});
