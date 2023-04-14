'use strict';

const levels = [{
    scoresPerLevel: 5,
    enemy: 'level1.png'
},
{
    scoresPerLevel: 5,
    enemy: 'level2.png'
},
{
    scoresPerLevel: 5,
    enemy: 'level3.png'
},
{
    scoresPerLevel: 5,
    enemy: 'level4.png'
},
{
    scoresPerLevel: 5,
    enemy: 'level5.png'
}];

let currentLevel;
let levelCounter;
let scoreCounter;
let totalScoreCounter;

const levelText = document.querySelector('.level');
const scoreText = document.querySelector('.score');
const totalScoreText = document.querySelector('.total-score');
const enemyButton = document.querySelector('.enemy');
const cogratulationWindow = document.querySelector('.cogratulation-window');

const startGame = () => {
    levelCounter = 1;
    levelText.textContent = 'Level: ' + levelCounter;

    scoreCounter = 0;
    scoreText.textContent = 'Score: ' + scoreCounter;

    totalScoreCounter = 0;
    totalScoreText.textContent = 'Total score: ' + totalScoreCounter;

    currentLevel = levels[levelCounter-1];
    setEnemy(currentLevel.enemy);
}

const hitEnemy = () => {
    addScore();
    addTotalScore();

    if (scoreCounter === currentLevel.scoresPerLevel) {
        if (levelCounter === levels.length) {
            showResults();
        } else {
            showCogratulationWindow();
        }
    }
}

const startNextLevel = () => {
    addLevel();
    resetScores();
    setEnemy(currentLevel.enemy);
}

const addLevel = () => {
    levelCounter++;
    levelText.textContent = 'Level: ' + levelCounter;

    currentLevel = levels[levelCounter-1];
}

const addScore = () => {
    scoreCounter++;
    scoreText.textContent = 'Score: ' + scoreCounter;
}

const resetScores = () => {
    scoreCounter = 0;
    scoreText.textContent = 'Score: ' + scoreCounter;
}

const addTotalScore = () => {
    totalScoreCounter++;
    totalScoreText.textContent = 'Total score: ' + totalScoreCounter;
}

const setEnemy = (levelEnemy) => {
    enemyButton.src = '../images/enemies/' + levelEnemy;
}

const showCogratulationWindow = () => {
    enemyButton.style.display = 'none';
    cogratulationWindow.style.display = 'block';
}

const hideCogratulationWindow = () => {
    cogratulationWindow.style.display = 'none';
    enemyButton.style.display = 'inline';
    startNextLevel();
}

const showResults = () => {
    localStorage.setItem('totalScore', totalScoreCounter);
    location.href = 'results.html';
}

enemyButton.addEventListener('click', hitEnemy);
cogratulationWindow.addEventListener('click', hideCogratulationWindow);

startGame();