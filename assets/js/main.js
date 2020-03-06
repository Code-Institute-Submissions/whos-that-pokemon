// setting DOM elements and url for fetching
const number = 4;
const url = `assets/js/pokemon-test.json`;
const pokeImage = document.getElementById('pokeImg');
const pokeName = document.getElementsByClassName('poke-answer');
//console.log(pokeName[1].innerHTML);

// game score and quesiton setup
let score = 0;
let questionCounter = 0;

function fetchPokemon() {

  fetch('assets/js/pokemon-test.json')
   .then(response => response.json())
   .then(pokeData => {
   pokeImage.innerHTML = `<img src="${pokeData[0].sprites.front_default}" height="250" width="250">`;
})
  .catch((error) => console.log(error))
}
  
fetchPokemon();