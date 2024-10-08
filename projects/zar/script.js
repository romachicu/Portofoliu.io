// Targhetam elementele
const containerPlayer1 = document.querySelector('.player--0');
const containerPlayer2 = document.querySelector('.player--1');
const totalScorePlayer1 = document.getElementById('score--0');
const totalScorePlayer2 = document.getElementById('score--1');
const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');
const diceElem = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

var scores, currentScore, currentPlayer, clicks, activeGame;

// Functia pentru joc nou
function newGame() {
    // Resetarea variabilelor
    scores = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    clicks = 0;
    activeGame = true;

    // Resetarea UI
    totalScorePlayer1.textContent = '0';
    totalScorePlayer2.textContent = '0';
    currentScorePlayer1.textContent = '0';
    currentScorePlayer2.textContent = '0';

    // Resetarea claselor containerelor
    // .player--winner .player--active
    containerPlayer1.classList.remove('player--active', 'player--winner');
    containerPlayer2.classList.remove('player--active', 'player--winner');
    containerPlayer1.classList.add('player--active');

}

// Functia pentru aruncarea zarului
function rollDice() {

}

// Functia pentru salvarea scorului - hold
function hold() {

}

// Functia de schimbare a jucatorului
function switchPlayer() {

}


newGame();
// Atribuim eventListener (click) pentru fiecare dintre butoane
newGameBtn.addEventListener('click', newGame);
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);




document.querySelector('.tile-nav-link')