/*
We're going to build wordle without the keyboard.

1. Add an event listener that listens to the form
2. Validate if the value to see if it's five characters
3. Create a function called "addguess" which pushes the guess on the guesses array
   Note: this is going to to take our new guess as a parameter
4. only call the add guess function if the form is valid
5. Create a showGuessOnPage function which will show the guess on the page
    a. return early if there are no guesses
    b. create a selector that will select the guess row characters as a nodelist
    c. using foreach and your knowledge of accessing indexes to add each letter to
       each element
    d. create a isCharacterInCorrectPlace function to check if the character is in the right
       index of the word
       - if it is add the 'correct-letter-placement' class to the element
       - return the function early if it is so that we can check the next character
    e.  create a isCharacterInWord function to check if the character is in the function
        - add the incorrect-letter-placement class to the element if it is
        - Note if it's in the correct placement it should have been true in the function
          above
6. Show the message in the element with the class wordle-success if it's successful
   Note: you can use includes on an array!
   We're going to create a function that will check this each guess!

*/
console.log("loaded");

let solutionWord = "clean";
let guesses = [];
let wordleForm = document.querySelector("#wordle-form");
let wordleContainer = document.querySelector(".guesses-container");
let allGuessElements = document.querySelectorAll(".guesses");

wordleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.submitter);

  let guessElement = event.target.elements["guess"];
  let guessValue = guessElement.value;

  if (isTextFiveChars(guessValue)) {
    guessElement.classList.remove("is-invalid");
  } else {
    guessElement.classList.add("is-invalid");
    return;
  }

  // The following will only execute if the guess is 5 chars
  addGuess(guessValue);
  wordleForm.reset();
  checkIfCorrect();
});

wordleContainer.addEventListener("click", (event) => {
  // If we clicked on an element that is not one of the guesses
  // just end the function here
  if (!isGuessElement(event.target)) {
    return;
  }
  let clickedGuessElement = event.target;

  let allGuessElementsArray = Array.from(allGuessElements);

  let indexToDelete = allGuessElementsArray.indexOf(clickedGuessElement);

  // Once we have the index of the guess to delete we'll pass that into a function that deletes it
  removeGuess(indexToDelete);
});

const isGuessElement = (element) => {
  return element.classList.contains("guesses");
};

const removeGuess = (guessToRemoveIndex) => {
  // Remove guess from data structure
  guesses.splice(guessToRemoveIndex, 1); // First give it the index to start at, then the number of elements to delete
  console.log(guesses);
  // TODO: Redraw the visuals
};

const addGuess = (guess) => {
  guesses.push(guess);
  showGuessOnPage();
};

const showGuessOnPage = () => {
  // Get the last guess
  let lastIndex = guesses.length - 1;
  let lastGuess = guesses[lastIndex];
  console.log(lastGuess);

  // Then render out the letters
  let selector = `.guess-${lastIndex} .guess-character`;
  let characterBoxes = document.querySelectorAll(selector);
  // Go through each box
  characterBoxes.forEach((element, index) => {
    // put in the corresponding letter
    element.innerText = lastGuess[index];
    if (isCharacterInCorrectPlace(lastGuess, index)) {
      // check if the letter is correct in position and inclusion -> make box green
      element.classList.add("correct-letter-placement");
    } else if (isCharacterInWord(lastGuess, index)) {
      // check if the letter is correct in inclusion only -> make box yellow
      element.classList.add("incorrect-letter-placement");
    }
  });
  //   for (let index = 0; index < characterBoxes.length; index++) {
  //     const element = characterBoxes[index];
  //     element.innerText = lastGuess[index];
  //   }
};

// Guess is the full word, index is the index of the character in that word we are checking
const isCharacterInWord = (guess, index) => {
  if (solutionWord.toLowerCase().includes(guess.toLowerCase()[index])) {
    return true;
  } else {
    return false;
  }
};

const isCharacterInCorrectPlace = (guess, index) => {
  if (solutionWord[index].toLowerCase() === guess[index].toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

const checkIfCorrect = () => {
  if (guesses.includes(solutionWord)) {
    document.querySelector(".wordle-success").classList.remove("hidden");
  }
};

const isTextFiveChars = (text) => {
  //   if (text.length === 5) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return text.length === 5;
};
