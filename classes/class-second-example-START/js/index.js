/*
Using Classes and Objects.

In this example we're going to create some balloons that when we click on them
they're going to get removed from the screen.

1. import bootstrap and our css
2. create the balloon class in the balloon.js folder
3. Use this class and initialize a few. 
4. write an event listener that removes the balloons from the page.


*/

// import our bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/main.css";

import { Balloon } from "./utils/balloon";

// Use a loop to spawn balloons
for (let i = 0; i < 20; i++) {
  // pass in the score
  let newBalloon = new Balloon();
  newBalloon.addToElement(document.querySelector(".balloons"));
}

// Add a remove listener
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("single-balloon")) {
    event.target.remove();
    // read the score from the element attribute
    // increment total score
    // spawn new balloon
  }
});

// Add a score tracker
// Make each balloon worth some score and display that on the balloon in some way
// When you click a balloon add it's score to a total that you display
// Popping a balloon should spawn a new balloon
