'use strict';

const showResults = () => {
    const userName = localStorage.getItem('name');
    const totalScore = localStorage.getItem('totalScore');
    
    const nameText = document.querySelector('.result-block-name');
    nameText.textContent = 'Congratulations ' + userName + ', you won!';
    
    const totalScoreText = document.querySelector('.result-block-score');
    totalScoreText.textContent = 'Your total score: ' + totalScore;
}

showResults();