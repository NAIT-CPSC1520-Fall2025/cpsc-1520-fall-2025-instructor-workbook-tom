import { createCardElement } from "../dom/card.js";

class Card {
  constructor({ title, description }) {
    this.element = createCardElement({
      title: title,
      description: description,
    });
    this.toLearnListElement = document.querySelector(".to-learn-stickies");
    this.understoodListElement = document.querySelector(".understood-stickies");
  }
}

export { Card };
