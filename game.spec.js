const {is_game_over} = require("./game.js");

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
