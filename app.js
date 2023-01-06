/* Imports */

/* Get DOM Elements */
const submitButton = document.getElementById('button');
const promptSection = document.getElementById('prompt');
const responseSection = document.getElementById('response');
const answerSection = document.getElementById('answer');
const resetButton = document.getAnimations('reset');
/* State */

/* Events */
submitButton.addEventListener('click', () => {
    toggleSections();
    const randomInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randomInt];
});

answerP.textContent = randomChoice;

resetButton.addEventListener('click', () => {
    toggleSections();
});

function toggleSections() {
    promptSection.classList.toggle('hide');
    answerSection.classList.toggle('hide');
}
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
