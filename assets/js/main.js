// setting DOM elements and url for fetching
const number = 4;
const url = `assets/js/pokemon-test.json`;
const pokeImage = document.getElementById('pokeImg');
const pokeAnswer = Array.from(document.getElementsByClassName('poke-answer'));
//console.log(pokeAnswer); // for testing purposes

// game score and quesiton setup
let score = 0;
let questionCounter = 0;
const questionMax = 10;

// fetches pokemon data
function fetchPokemon() {

  fetch('assets/js/pokemon-test.json')
   .then(response => response.json())
   .then(pokeData => {
   pokeImage.innerHTML = `<img src="${pokeData[0].sprites.front_default}" height="250" width="250">`;
})
  .catch((error) => console.log(error))
}
  
fetchPokemon();

// starts the game
startQuiz();

// resets the game
resetQuiz();