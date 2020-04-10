// setting DOM elements
const userChoice = Array.from(document.getElementsByClassName('poke-name'));
const questionData = document.getElementById('questionCount');
const scoreData = document.getElementById('scoreCount');
const gameContainer = document.getElementById('game-container');
const endResult = document.getElementById('end-result');
const pokemon = document.querySelector('#pokeImg img');
const finalScore = document.getElementById('final-score');
const scoreReview = document.getElementById('score-review');
const controls = document.getElementById('controls');
let currentMon = [];

// game score and question setup
let scoreCounter = 0;
let questionCounter = 0;
let scoreBonus = 100;
const questionMax = 20;

/**
 * EVENT LISTENERS
 */

/**
 * Start game
 */
$("#start-game").click(function () {
    $("#landing-page").hide();
    gameContainer.classList.remove("d-none");
    controls.classList.remove("d-none");
    fetchPokemon();
});

/**
 * Restart button
 */
$('#restart').click(function () {
    restartGame();
});

/**
 * FUNCTIONS
 */

/**
 * Fetches Pokemon API.
 * Defines variable that contains only the
 * Pokemon name and image fof the game.
 * Sets the limit to 150 Pokemon.
 * Randomises Pokemon in an array.
 */
const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
    const pokemon = data.results.map((data, index) => ({
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`,
    }));

    pokeData = randomisePokemon(pokemon);
    console.log(pokeData);
    pushMonToDOM();

};

/**
 * Slices Pokemon array of 150 into an array
 * of 4 Pokemon.
 * Pushes 4 Pokemon into an empty array.
 */
function pushMonToDOM() {
    if (questionCounter >= questionMax) {
        gameContainer.classList.add("d-none");
        endResult.classList.remove("d-none");
        gameOver();
    }

    currentMon = [];
    currentMon.push(...pokeData.slice(0, 4));

    questionCounter++;
    questionData.innerText = `${questionCounter}/${questionMax}`;
    scoreData.innerText = `${scoreCounter}`;

    generateNewPokemon();
}

/** 
 * Used to shuffle Pokemon and output a number
 */
function shufflePokemon(arrayMon) {
    return Math.floor(Math.random() * arrayMon.length);
}

/**
 * Function to randomly sort pokemon data each
 * time it is called.
 */
function randomisePokemon(array) {
    return array.sort(() => Math.random() - 0.5);
}

/** 
 * Attaches the current 'Pokemon to match' to
 * the image source in the HTML
 */
function displayPokemonImage() {
    pokemon.src = pokemonToMatch.image;
}

/**
 * assigns the current Pokemon name to the
 * inner text of the user choice button
 */
function loadPokemonNames() {
    userChoice[0].innerText = currentMon[0].name.toUpperCase();
    userChoice[1].innerText = currentMon[1].name.toUpperCase();
    userChoice[2].innerText = currentMon[2].name.toUpperCase();
    userChoice[3].innerText = currentMon[3].name.toUpperCase();
}

/**
 * Generates a random Pokemon from the
 * current Pokemon array.
 * Filters out the current Pokemon so it does
 * not show up again.
 */
function generateNewPokemon() {
    pokemonToMatch = currentMon[shufflePokemon(currentMon)];
    pokeData = pokeData.filter(pokemon => pokemon.name !== pokemonToMatch.name);

    displayPokemonImage();
    loadPokemonNames();
    checkPokemonAnswer();

}

/**
 * Checks user input against the game question.
 * Contains a loop with an event listener that
 * listens out for the user's choice.
 * If correct or incorrect it triggers the
 * appropriate alert.
 */
function checkPokemonAnswer() {
    userChoice.forEach(answer => {
        answer.addEventListener('click', () => {
            const selectedChoice = event.target;
            const correctChoice = selectedChoice.innerText.toLowerCase() == pokemonToMatch.name.toLowerCase();

            if (correctChoice) {
                Swal.fire(answerAlert(true))
                .then((result) => {
                    if (result) {
                        incrementScore(scoreBonus);
                        pushMonToDOM(randomisePokemon(pokeData));
                    }
                });
            } else Swal.fire(answerAlert(false))
            .then((result) => {
                if (result) {
                    pushMonToDOM(randomisePokemon(pokeData));
                }
            });

        });
    });
}

/**
 * Sweet Alert function that is triggered
 * after user input has been checked.
 */
function answerAlert(correctChoice) {
    const pokemonAlert = {
        position: 'center',
        allowEscapeKey: false,
        allowOutsideClick: true,
        showConfirmButton: false,
        imageWidth: 250
    };

    if (correctChoice) {
        pokemonAlert.title = 'Correct!';
        pokemonAlert.text = `The answer is ${pokemonToMatch.name.toUpperCase()}.`;
        pokemonAlert.imageUrl = `${pokemonToMatch.image}`;
        pokemonAlert.icon = 'success';
        pokemonAlert.timer = 2500;
    } else {
        pokemonAlert.title = 'Uh oh!';
        pokemonAlert.text = `The answer is ${pokemonToMatch.name.toUpperCase()}.`;
        pokemonAlert.imageUrl = `${pokemonToMatch.image}`;
        pokemonAlert.icon = 'error';
        pokemonAlert.timer = 2500;
    }
    return pokemonAlert;
}

/**
 * Increments score if answer is correct.
 * Writes the score to the screen.
 */
function incrementScore(num) {
    scoreCounter += num;
    scoreData.innerText = scoreCounter;
}

/**
 * Function that is triggered when max
 * questions are reached.
 * Writes text to the screen depending on
 * user score scenario.
 */
function gameOver() {
    finalScore.innerText = scoreCounter;

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
    else if (scoreCounter >= 1000 && scoreCounter < 1500) {
        scoreReview.innerHTML = `
        <h2 class="pt-4">Well done!<h2>
        <p class="pt-4">You know your Bulbasaur from your Pikachu! Be sure to claim your plushie from the prize counter using the ID:</p>
         <p class="pt-4">#273856</p>`;
    } else if (scoreCounter >= 1500 && scoreCounter <= 2000) {
        scoreReview.innerHTML = `
        <h2 class="pt-4">Fantastic!<h2>
        <p class="pt-4">You're like a walking, talking Pokédex! Don't forget to claim your top secret exclusive prize from the prize counter using the below ID:</p>
        <p class="pt-4">#973836</p>`;
    } else {
        scoreReview.innerHTML = `
        <h2>Error loading score, please try again or contact support<h2>`;
    }

}

/**
 * Restarts the game.
 * Sets the score and questions to 0.
 * Removes end game screen and shows main
 * game container.
 */
function restartGame() {
    scoreCounter = 0;
    questionCounter = 0;
    gameContainer.classList.remove("d-none");
    endResult.classList.add("d-none");
    fetchPokemon();
}