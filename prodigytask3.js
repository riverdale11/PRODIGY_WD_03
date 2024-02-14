
const board = document.getElementById('board');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function checkTie() {
    return !gameBoard.includes('');
}

function handleClick(index) {
    if (gameBoard[index] || gameOver) {
        return;
    }

    gameBoard[index] = currentPlayer;
    const cell = document.getElementById(`cell${index}`);
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
        gameOver = true;
    } else if (checkTie()) {
        alert('It\'s a tie!');
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell${i}`;
    cell.addEventListener('click', () => handleClick(i));
    board.appendChild(cell);
}
