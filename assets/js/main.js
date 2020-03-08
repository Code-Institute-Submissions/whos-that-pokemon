// setting DOM elements and url for fetching
const number = 4;
const url = `assets/js/pokemon-test.json`;
const pokeImage = document.getElementById('pokeImg');
const pokeAnswer = Array.from(document.getElementsByClassName('poke-answer'));
const questionData = document.getElementById('questionCount');
const scoreData = document.getElementById('scoreCount');
// for access to first 150 pokemon randomly
const pokeNum = Math.floor(Math.random() * 151);
let pokeQuestions = [];

// game score and quesiton setup
let scoreCount = 0;
let questionCounter = 0;
const questionMax = 10;

// fetches pokemon data
function fetchPokemon() {

  fetch(url)
   .then(response => response.json())
   .then(pokeData => {
   console.log(pokeData);
})
  .catch((error) => console.log(error))
}
  
fetchPokemon();

// starts the game
function startQuiz() {
    questionCounter = 0;
    scoreCount = 0;
}

startQuiz();

// resets the game
resetQuiz();

pokeAnswer.addEventListener('click', function(){ alert("Hello World!"); });