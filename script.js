
let currentPlayer = 'X';
let gameboard = ['', '', '', '', '', '', '', '', '']; 


function playermove(cellIndex) {
    if (gameboard[cellIndex] === '') { 
        gameboard[cellIndex] = currentPlayer;
        Board();
        if (checkWinner()) {
            showresult(currentPlayer + " win");
        } else if (checkDraw()) {
            showresult("Draw");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}


function checkWinner() {
    const winline = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]              
    ];

    for (let i of winline) {
        const [a, b, c] = i;
        if (gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {
            return true;
        }
    }
    return false;
}


function checkDraw() {
    return gameboard.every(cell => cell !== '');
}


function Board() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameboard[index];
    });
}


function showresult(result) {
    document.getElementById('result').textContent = result;
}



function reset() {
    currentPlayer = 'X';
    gameboard = ['', '', '', '', '', '', '', '', ''];
    Board();
    showresult('');
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', cellClick);
    });
}


function cellClick() {
    const cellIndex = this.dataset.index;
    playermove(cellIndex);
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', cellClick);
});

document.getElementById('reset').addEventListener('click', reset);


Board();