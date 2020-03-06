// setting DOM elements and url for fetching
const number = 4;
const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
const pokeImage = document.getElementById('pokeImg');
const pokeName = document.getElementsByClassName('poke-answer');
//console.log(pokeName[1].innerHTML);

// game score and quesiton setup
let score = 0;
let questionCounter = 0;

function fetchPokemon() {

  fetch(url)
   .then(response => response.json())
   .then(pokeData => {
   pokeImage.innerHTML = `<img src="${pokeData.sprites.front_default}" height="250" width="250">`;
   pokeName.innerHTML = pokeData.name.toUpperCase();
})
  .catch((error) => console.log(error))
}
  
fetchPokemon();