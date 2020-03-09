// setting DOM elements and url for fetching
let userChoice = Array.from(document.getElementsByClassName('poke-name'));
const pokeImage = document.getElementById('pokeImg');
const questionData = document.getElementById('questionCount');
const scoreData = document.getElementById('scoreCount');


// game score and quesiton setup
let currentMon = {};
let scoreCount = 0;
let questionCounter = 0;
const questionMax = 10;
let availableMon = [];

let pokeQuestions = [
  {
    id: 1,
    name: "bulbasaur",
    type: "grass",
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        back_female: null,
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        back_shiny_female: null,
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        front_female: null,
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        front_shiny_female: null
    }
  },
  
  {
    id: 2,
    name: "ivysaur",
    type: "grass",
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
        back_female: null,
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
        back_shiny_female: null,
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        front_female: null,
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        front_shiny_female: null
    }
  },
  
  {
    id: 3,
    name: "venasaur",
    type: "grass",
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
        back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png",
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
        back_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/3.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png",
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
        front_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/3.png"
    }
  },
  
  {
    id: 4,
    name: "charmander",
    type: "fire",
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        back_female: null,
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
        back_shiny_female: null,
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        front_female: null,
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        front_shiny_female: null
    }
  },
  {
     id: 5,
     name: "charmeleon",
     sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  }
},

{
  id: 6,
  name: "charizard",
  sprites: {
     front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
}
},
{
  id: 7,
  name: "squirtle",
  sprites: {
     front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
}
},
{
  id: 8,
  name: "wartortle",
  sprites: {
     front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
}
},
{
  id: 9,
  name: "blastoise",
  sprites: {
     front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
}
},
{
  id: 10,
  name: "caterpie",
  sprites: {
     front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
}
}
  ];

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