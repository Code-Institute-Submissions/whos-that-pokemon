const number = 68;
const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

function fetchPokemon() {

  fetch(url)
   .then(response => response.json())
   .then(data => {
   document.getElementById('pokeImg').innerHTML = `<img src="${data.sprites.front_default}" height="250" width="250">`;
})
  .catch((error) => console.log(error))
}
  
fetchPokemon();