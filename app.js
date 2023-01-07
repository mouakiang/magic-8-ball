/* Imports */

/* Get DOM Elements */
const submitBtn = document.getElementById('submit');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const answerP = document.getElementById('answer');
const resetBtn = document.getElementById('reset');
/* State */

/* Events */
submitBtn.addEventListener('click', () => {
    //-hide prompt (to hide comment press ctrl forward slash)
    //-display the image
    toggleSections();
    //-pick a random number between 0 and length of the answers array – 1
    const randomInt = Math.floor(Math.random() * answers.length);

    const randomChoice = answers[randomInt];
    //-set the content of the answer p to the random choice
    answerP.textContent = randomChoice;
});

resetBtn.addEventListener('click', () => {
    // hide 8 ball and the answer
    // show prompt
});

function toggleSections() {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
}

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
