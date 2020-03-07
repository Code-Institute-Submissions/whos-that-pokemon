// setting DOM elements and url for fetching
const number = 4;
const url = `assets/js/pokemon-test.json`;
const pokeImage = document.getElementById('pokeImg');
const pokeAnswer = Array.from(document.getElementsByClassName('poke-answer'));
// for access to first 150 pokemon randomly
const pokeNum = Math.floor(Math.random() * 151);
console.log(pokeNum); // for testing purposes

// game score and quesiton setup
let score = 0;
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
startQuiz();

// resets the game
resetQuiz();