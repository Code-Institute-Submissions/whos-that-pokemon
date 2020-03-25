// setting DOM elements and url for fetching
let userChoice = Array.from(document.getElementsByClassName('poke-name'));
const pokeImage = document.getElementById('pokeImg');
const questionData = document.getElementById('questionCount');
const scoreData = document.getElementById('scoreCount');
const gameContainer = document.getElementById('game-container');
const pokemon = document.querySelector('#pokeImg img');
console.log(userChoice);

// game score and question setup
let scoreCounter  = 0;
let questionCounter = 0;
const scoreBonus = 100;
const questionMax = 10;

/*
**************************
    Functions
**************************
*/

function fetchPokemon() {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
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
});
};

fetchPokemon();

function pushMonToDOM() {
  currentMon = [];
  currentMon.push(...pokeData.slice(0, 4));
  matchMon = currentMon[shuffleFour(currentMon)];

  questionCounter++;
  questionData.innerText = `${questionCounter}/${questionMax}`;

    generateNewMon();
    displayMonImage();
    loadPokemonNames();
    checkPokemonAnswer();
}

// shuffle random 4 pokemon in sliced array
shuffleFour = (arrayMon) => Math.floor(Math.random() * arrayMon.length);

// function to randomly sort pokemon data
shuffleMon = (array) => array.sort(() => Math.random() - 0.5);

function loadPokemonNames() {
    shuffleMon(userChoice);
    userChoice[0].innerText = currentMon[3].name.toUpperCase();
    userChoice[2].innerText = currentMon[1].name.toUpperCase();
    userChoice[1].innerText = currentMon[0].name.toUpperCase();
    userChoice[3].innerText = currentMon[2].name.toUpperCase();
}

// function to check user input
function checkPokemonAnswer() {
    userChoice.forEach(answer => {
        answer.addEventListener('click', e => {
            const selectedChoice = e.target;
            let classToApply;
            if (selectedChoice.innerText.toLowerCase() == matchMon.name) {
                classToApply = 'rightanswer';
                incrementScore(scoreBonus);
            } else {
                classToApply = 'wronganswer';
            }
            
            selectedChoice.parentElement.classList.add(classToApply);
            console.log(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                pushMonToDOM();
            }, 1000);

        });
    });
}

// increments score if answer is correct
function incrementScore(num) {
    scoreCounter += num;
    scoreData.innerText = scoreCounter;
}

function displayMonImage() {
    pokemon.src = matchMon.image;
}

/*
**************************
    Event listeners
**************************
*/

$("#start-game").click(function(){
    $("#landing-page").hide();
    gameContainer.classList.remove("d-none");
  });