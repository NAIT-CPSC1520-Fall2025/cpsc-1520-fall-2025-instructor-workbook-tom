// create a balloon class that
// will create a balloon that is going to float up.

import image from "../../img/balloon.gif";

class Balloon {
  MAX_STARTING_HEIGHT = 200;
  MAX_STARTING_WIDTH = 1500;
  // This is called when you instantiate a new balloon
  constructor() {
    // Add a score to the constructor
    // save that score as a variable
    // Create a reference to the HTML element
    this.element = this.createBalloon();

    // add the score as an attribute to the element
    this.floatUp();
  }

  // Make a helper function that creates a new balloon element
  // pass in the score here
  createBalloon() {
    // Create the element
    let balloonElement = document.createElement("img");

    // add a score element that displays the score

    // Add the class
    balloonElement.classList.add("single-balloon");

    // Change the image src
    balloonElement.setAttribute("src", image);

    this.leftMargin = Math.floor(Math.random() * this.MAX_STARTING_WIDTH);
    this.bottomMargin = Math.floor(Math.random() * this.MAX_STARTING_HEIGHT);

    this.setStyleAndPosition(balloonElement);

    return balloonElement;
  }

  // Create a function to add the balloon to the page
  addToElement(containerElement) {
    containerElement.appendChild(this.element);
  }

  // Create a function that styles and positions the balloon as needed
  setStyleAndPosition(element) {
    element.style = `
        max-height: 200px;
        max-width: 200px;
        position: absolute;
        bottom: ${this.bottomMargin}px;
        left: ${this.leftMargin}px;
    `;
  }

  // Create a function to make the balloon float
  floatUp() {
    // Once this function is called it should start the balloon floating
    setInterval(() => {
      this.bottomMargin += 0.2;
      this.setStyleAndPosition(this.element);
    }, 10);
  }
}

export { Balloon };
