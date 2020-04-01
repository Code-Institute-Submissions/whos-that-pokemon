// setting DOM elements and url for fetching
const userChoice = Array.from(document.getElementsByClassName('poke-name'));
const pokeImage = document.getElementById('pokeImg');
const questionData = document.getElementById('questionCount');
const scoreData = document.getElementById('scoreCount');
const gameContainer = document.getElementById('game-container');
const endResult = document.getElementById('end-result');
const pokemon = document.querySelector('#pokeImg img');
const finalScore = document.getElementById('final-score');
const restart = document.getElementById('restart');
const scoreReview = document.getElementById('score-review');
const controls = document.getElementById('controls');
let currentMon =[];

// game score and question setup
let scoreCounter  = 0;
let questionCounter = 0;
const scoreBonus = 100;
const questionMax = 2;

/*
**************************
    Event listeners
**************************
*/

$("#start-game").click(function(){
    $("#landing-page").hide();
    gameContainer.classList.remove("d-none");
    controls.classList.remove("d-none");

    fetchPokemon();
  });

/*
**************************
    Functions
**************************
*/
// with help of James Q Quick video on Pokemon API
function fetchPokemon() {
  const promises = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
}

Promise.all(promises).then((results) => {
  const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites.front_default
  }));

  pokeData = shuffleMon(pokemon); // shuffles Pokemon data
  pushMonToDOM(); // pushes Pokemon information to the DOM
  console.log(pokeData);
  console.log('fetching api');
});

}

function pushMonToDOM() {
  if(questionCounter >= questionMax) {
      gameContainer.classList.add("d-none");
      endResult.classList.remove("d-none");
      gameOver();
  }

  currentMon = [];
  console.log(currentMon);
  currentMon.push(...pokeData.slice(0, 4));
  console.log('pushing pokemon to DOM');

  questionCounter++;
  questionData.innerText = `${questionCounter}/${questionMax}`;

  generateNewMon();

}

// shuffle random 4 pokemon in sliced array
shuffleFour = (arrayMon) => Math.floor(Math.random() * arrayMon.length);

// function to randomly sort pokemon data
shuffleMon = (array) => array.sort(() => Math.random() - 0.5);

function displayMonImage() {
    pokemon.src = matchMon.image;
    console.log('displaying image');
}

function loadPokemonNames() {
    shuffleMon(userChoice);
    userChoice[0].innerText = currentMon[3].name.toUpperCase();
    userChoice[2].innerText = currentMon[1].name.toUpperCase();
    userChoice[1].innerText = currentMon[0].name.toUpperCase();
    userChoice[3].innerText = currentMon[2].name.toUpperCase();
    console.log('loading answers to button');
}

function generateNewMon() {
    matchMon = currentMon[shuffleFour(currentMon)];
    pokeData = pokeData.filter(pokemon => pokemon.name !== matchMon.name);
    console.log(pokeData);
    console.log("shuffling through new Pokemon");

    displayMonImage();
    loadPokemonNames();
    checkPokemonAnswer();

}

// function to check user input
function checkPokemonAnswer() {
    console.log("checking answer")
    userChoice.forEach(answer => {
        console.log("looping through userChoice")
        answer.addEventListener('click', () => {
            const selectedChoice = event.target;
            console.log(selectedChoice)
            let correctChoice = selectedChoice.innerText.toLowerCase() == matchMon.name.toLowerCase();
            console.log("Answer is " + correctChoice)
            
            if(correctChoice){ 
                Swal.fire(sweetAlert(true)).then((result) => {
                    if (result) {
                        incrementScore(scoreBonus);
                        pushMonToDOM();
                    }
                });  
                        } else Swal.fire(sweetAlert(false)).then((result) => {
                    if (result) {
                        pushMonToDOM();
                    }
                });

        });
    });
    console.log('check done')
}

function sweetAlert(correctChoice) {
    const pokemonAlert = {
        position:'center',
        allowEscapeKey: false,
        allowOutsideClick: true,
        showConfirmButton: true,
        confirmButtonColor: '#344feb'    
    };

    if(correctChoice) {
       pokemonAlert.title = 'Correct!';
       pokemonAlert.text = `The answer is ${matchMon.name.toUpperCase()}.`;
       pokemonAlert.imageUrl = `${matchMon.image}`;
       pokemonAlert.icon = 'success';
       pokemonAlert.timer = 2000;
    } else {
        pokemonAlert.title = 'Uh oh!';
        pokemonAlert.text = `The answer is ${matchMon.name.toUpperCase()}.`;
        pokemonAlert.imageUrl = `${matchMon.image}`;
        pokemonAlert.icon = 'error';
        pokemonAlert.timer = 2000;
    }
    return pokemonAlert;
}

//increments score if answer is correct
function incrementScore(num) {
    scoreCounter += num;
    console.log(scoreCounter);
    scoreData.innerText = scoreCounter;
}

function gameOver() {
    finalScore.innerText = scoreCounter;
    console.log('calling final score');

    if (scoreCounter <= 500) {
        scoreReview.innerHTML = `
        <h2 class="pt-4">Oh no...<h2>
        <p class="pt-4">You flopped like a Magikarp. Want to try again? Click the restart button below!<p>`;
    } else if (scoreCounter > 500 && scoreCounter < 1000) {
        scoreReview.innerHTML = `
        <h2 class="pt-4">Not bad!<h2>
        <p class="pt-4">Your knowledge of Pokémon isn't bad, want to try again?</p>
        <p class="pt-4">For your efforts, have a vinyl sticker on us! Got to the prize counter to claim using this user ID:</p>
        <p>#123456</p>`;
    }
    else if (scoreCounter > 1000 && scoreCounter < 1500) {
        scoreReview.innerHTML = `
        <h2 class="pt-4">Well done!<h2>
        <p class="pt-4">You know your Bulbasaur from your Pikachu! Be sure to claim your plushie from the prize counter using the ID:</p>
         <p class="pt-4">#273856</p>`;
    } else if (scoreCounter > 1500 && scoreCounter <= 2000) {
        scoreReview.innerHTML = `
        <h2 class="pt-4">Fantastic!<h2>
        <p class="pt-4">You're like a walking, talking Pokédex! Don't forget to claim your top secret exclusive prize from the prize counter using the below ID:</p>
        <p class="pt-4">#973836</p>`;
    } else {
        scoreReview.innerHTML = `
        <h2>Error loading score, please try again or contact support<h2>`
    }

}

function restartGame() {
    scoreCounter = 0;
    questionCounter = 0;
    pushMonToDOM();
}

restart.addEventListener('click', () => {
    scoreCounter = 0;
    questionCounter = 0;
    pushMonToDOM();
});