// setting DOM elements and url for fetching
let userChoice = Array.from(document.getElementsByClassName('poke-name'));
const pokeImage = document.getElementById('pokeImg');
const questionData = document.getElementById('questionCount');
const scoreData = document.getElementById('scoreCount');


// game score and question setup
let currentMon = {};
let scoreCount = 0;
let questionCounter = 0;
const questionMax = 10;
let availableMon = [];

function startQuiz() {
  questionCounter = 0;
  score = 0;
  availableMon = [...pokeQuestions];
  console.log(availableMon);
  getNewPokemon();
};

function getNewPokemon() {
  const pokeIndex = Math.floor(Math.random() * availableMon.length);
  currentMon = availableMon[pokeIndex];
  pokeImage.innerHTML = `<img src="${currentMon.sprites.front_default}" height="250" width="250">`;

};

startQuiz();

// resets the game
resetQuiz();