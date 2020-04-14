/*
COPYRIGHT BELONGS TO VIVEK PANYAM
Source: https://blog.vivekpanyam.com/how-to-build-an-ai-that-wins-the-basics-of-minimax-search/

This program consists of basic AI that calculates all possible moves to win every time
a user inputs a choice. The Minimax Search algorithm was implemented as a decision tool
to minimize the chances of losing against a human player
*/

//game board object
var board = [
  //sets 3x3 matrix as board
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
//event listener
var myMove = false;

if (myMove) {
    makeMove();
}
//resets the board
function restartGame() {
  //restarts game once tied or loss
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    myMove = false;
    update();
}
//DOM Ready
$(document).ready(function() {
    $("button").click(function() {
      //gets cell's location from user input
        var cell = $(this).attr("id")
        console.log("This is cell " + cell);
        //aquires the row position
        var row = parseInt(cell[1])
        console.log("This is row " + row);
        //aquires the column position
        var col = parseInt(cell[2])
        console.log("This is col " + col);
        if (!myMove) {
            board[row][col] = false;
            myMove = true;
            update();
            makeMove();
        }
    });
    $("#restart").click(restartGame);
});
//updates the turn based on the getWinner Functions return
function update() {
    //updates display on the board
    updateBoard();

    var winner = getWinner(board);

    $("#winner").text(winner == 1 ? "AI Won!" : winner == 0 ? "You Won!" : winner == -1 ? "Tie!" : "");

    $("#move").text(myMove ? "AI's Move" : "Your move");
}

function getWinner(board) {

    // Check if someone won
    vals = [true, false];
    var allNotNull = true;
    for (var k = 0; k < vals.length; k++) {
        var value = vals[k];

        // Check rows, columns, and diagonals
        var diagonalComplete1 = true;
        var diagonalComplete2 = true;
        for (var i = 0; i < 3; i++) {
            if (board[i][i] != value) {
                diagonalComplete1 = false;
            }
            if (board[2 - i][i] != value) {
                diagonalComplete2 = false;
            }
            var rowComplete = true;
            var colComplete = true;
            for (var j = 0; j < 3; j++) {
                if (board[i][j] != value) {
                    rowComplete = false;
                }
                if (board[j][i] != value) {
                    colComplete = false;
                }
                if (board[i][j] == null) {
                    allNotNull = false;
                }
            }
            if (rowComplete || colComplete) {
                return value ? 1 : 0;
            }
        }
        if (diagonalComplete1 || diagonalComplete2) {
            return value ? 1 : 0;
        }
    }
    if (allNotNull) {
        return -1;
    }
    return null;
}


function updateBoard() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            $("#c" + i + "" + j).text(board[i][j] == false ? "X" : board[i][j] == true ? "O" : "");
        }
    }
}

function makeMove() {
    board = minimaxMove(board);
    console.log(numNodes);
    myMove = false;
    update();
}

function minimaxMove(board) {
    numNodes = 0;
    return recurseMinimax(board, true)[1];
}

var numNodes = 0;

function recurseMinimax(board, player) {
    numNodes++;
    var winner = getWinner(board);
    if (winner != null) {
        switch(winner) {
            case 1:
                // AI wins
                return [1, board]
            case 0:
                // opponent wins
                return [-1, board]
            case -1:
                // Tie
                return [0, board];
        }
    } else {
        // Next states
        var nextVal = null;
        var nextBoard = null;

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == null) {
                    board[i][j] = player;
                    var value = recurseMinimax(board, !player)[0];
                    if ((player && (nextVal == null || value > nextVal)) || (!player && (nextVal == null || value < nextVal))) {
                        nextBoard = board.map(function(arr) {
                            return arr.slice();
                        });
                        nextVal = value;
                    }
                    board[i][j] = null;
                }
            }
        }
        return [nextVal, nextBoard];
    }
}

update();
