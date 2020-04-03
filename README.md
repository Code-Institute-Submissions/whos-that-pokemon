# [Who's that Pokémon?](https://orlamadden.github.io/whos-that-pokemon/)
Milestone project #2 for the Code Institute.

Every year, the Pokémon World Championships is held in August of each year, bringing together the best Pokémon TCG and video game players from around the globe. This year’s event is being held in the Excel in London, and is estimated at hosting 5,000 people including contestants, their family and their friends.

As part of the event, the organisers wanted a fun quiz app created that would entertain attendees and test their Pokémon knowledge. When users get a certain amount of points, they can redeem their points at the 'Poké Prizes' counter at the event to win Pokémon prizes.

---

## UX

#### Project Goals

The primary goal of the quiz is to provide a clean, intuitive and fun game to entertain and delight it's users. It uses data from the Pokémon API to display a silhouette of a random Pokémon and 4 choices for the user to choose from.

#### User Stories

1.	As a user I want to play something fun to challenge my Pokémon knowledge.
2.	As a user I want to pass the time at the convention with a fun game.
3.	As a user I want large, easy to press buttons, so that I can press them on my mobile.
4.	As a user I want feedback on whether my answer is correct or not.
5.	As a user I want to know what my score is after each question.
6.	As a user I want to restart the game so I can try improve my score.


### Wireframes

I used Adobe Illustrator to complete my wireframes as part of the design and planning process for this project. I made minor changes throughout the development stage so my website looks slightly different than the wireframes, but the core concept is still there.

Main quiz
- [Mobile](https://github.com/orlamadden/whos-that-pokemon/blob/master/wireframes/wireframes-mobile.jpg)
- [Tablet](https://github.com/orlamadden/whos-that-pokemon/blob/master/wireframes/wireframes-tablet.jpg)
- [Desktop](https://github.com/orlamadden/whos-that-pokemon/blob/master/wireframes/wireframes-desktop.jpg)

### Design Choices

I wanted to capture the theme of the Pokémon franchise and the essence of the retro Pokémon games for this app. The following design choices were made with this requirement:

#### Font
There are two fonts being used in this app. The default font is Open Sans and is used for most of the content copy. The second choice is VT323, which is a monospace font capturing the typography in the retro Pokémon games. This font is used in the main quiz container.

#### Colours
The primary colour choice is red and white, similar to the Pokémon brand. This was chosen for its friendly, approachable and slightly nostalgic feel for fans of the franchise.

---
## Features

#### Game Dashboard
- The game dashboard contains the question count, score, Pokémon silhouette, 4 answer choice buttons, info, help and reset buttons.
#### Reset Button
- The reset button, represented by a curved arrow icon from FontAwesome, resets the game. When the user presses the reset button, the question count returns to 1 and the score returns to 0.
#### Score Counter
- Score section displaying the user’s score. The score increments by 100 points if the user gets the answer correct.
#### Question Counter
- The question section displays the current question number. It also displays the maximum question count; in this game’s case it is 20 questions.
#### Pokémon API
- The main feature of this game is the Pokémon API. For the purpose of this game, the limit of Pokémon is 150.
#### Image container
- The image container is where the image sprite from the Pokémon API is displayed. There is a colour filter on the image making it a dark silhouette. The user needs to guess the silhouette to gain points.
#### Answers container
- The answers container is split into 4 buttons. Inside each of the buttons is the Pokémon names generated from the Pokémon API. One of these answers matches the image sprite highlighted in feature #6.
#### Sweet Alert modal
- This game uses the Sweet Alert pop up box that is triggered after user input. It alerts the user if they got an answer right or wrong. It displays the correct unfiltered image sprite and text containing the correct Pokémon’s name.
#### End game container
- Once the maximum number of questions is reached, the end game container will display the user’s final score and some feedback depending on the user score scenario.

### Recommendations for future implementation

#### Other modes
- I would like to add other modes that include other Pokémon generations for more of a challenge. For example, easy mode would be 150 Pokémon (Generation 1), medium mode would have 386 (Generation 1 – 3), hard mode would have 721 (Generation 1 – 6) and Pokémon master mode would have all 894 (Generation 1 – 8).
#### Pokédex
- A separate section to display all 150 Pokémon would be a ‘nice to have’ feature, which would display Pokémon names, sprites, type and number. 


---

## Technology

### Frontend Technologies used
- HTML - For building the foundation of my app. 
- CSS - For custom styles on my app.
- Bootstrap - The framework behind my app's structure and layout, prioritising mobile first design.
- Javascript - Primary function of the app for all user interaction.
- Photoshop - Photoshop was used to create the app's logo / header image.
- SweetAlert2 - Used to show feedback after the user selects an answer.


### Other
- Github - Used for remote storage of my project.
- Git - Used for version control.
---

## Credits

### Content
All text in the project was written by myself, apart from the generated names of the Pokémon which came from the API.

### Media

- The main logo and favicon was created by me using Photoshop. The font used for the logo and the favicon was obtained from [Dafont](https://www.dafont.com/pokemon.font?text=Who%27s+That+Pok%E9mon%3F)
- API source data from the [Pokémon API](https://pokeapi.co/)

### Code

- The design for the buttons was inspired by the following [Code Pen](https://codepen.io/tiffachoo/pen/aKKZrB) by Tiffany Choong

### Acknowledgements

Many thanks to:
- Code Institute Tutor Anna for opening my eyes to the wonderful debugger tool in DevTools
- Code Institute Tutor Samantha for helping me narrow down where a particular issue was in one of my functions

---

For educational purposes only.
