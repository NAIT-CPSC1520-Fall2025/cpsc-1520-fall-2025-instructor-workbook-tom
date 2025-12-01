// create a balloon class that
// will create a balloon that is going to float up.

import image from "url:../../img/balloon.gif";

class Balloon {
  // This is called when you instantiate a new balloon
  constructor() {
    // Create a reference to the HTML element
    this.element = this.createBalloon();
  }

  // Make a helper function that creates a new balloon element
  createBalloon() {
    // Create the element
    let balloonElement = document.createElement("img");

    // Add the class
    balloonElement.classList.add("single-balloon");

    // Change the image src
    balloonElement.setAttribute("src", image);

    this.leftMargin = 600;
    this.bottomMargin = 500;

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
}

export { Balloon };
