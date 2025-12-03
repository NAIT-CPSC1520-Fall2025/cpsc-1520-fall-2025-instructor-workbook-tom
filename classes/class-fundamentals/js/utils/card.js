import { createCardElement } from "../dom/card.js";

class Card {
  constructor({ title, description }) {
    this.element = createCardElement({
      title: title,
      description: description,
    });
    this.toLearnListElement = document.querySelector(".to-learn-stickies");
    this.understoodListElement = document.querySelector(".understood-stickies");
    this.render();
    this.bindEventListeners();
  }

  render() {
    this.toLearnListElement.appendChild(this.element);
  }

  remove() {
    this.element.remove();
  }

  moveToTop() {
    this.toLearnListElement.insertBefore(
      this.element,
      this.toLearnListElement.firstElementChild
    );
  }

  moveToUnderstood() {
    this.understoodListElement.appendChild(this.element);

    // TODO: remove the understood button
    this.element.children[0].children[4].remove();
    this.element.children[0].children[3].remove();
  }

  bindEventListeners() {
    let cardBody = this.element.children[0];

    // Select the remove button and add the correct listener
    let removeButton = cardBody.children[2];
    removeButton.addEventListener("click", () => {
      this.remove();
    });

    // Select the priority button and add the correct listener
    let topPriorityButton = cardBody.children[3];
    topPriorityButton.addEventListener("click", () => {
      this.moveToTop();
    });

    // Select the understood button and add the correct listener
    let understoodButton = cardBody.children[4];
    understoodButton.addEventListener("click", () => {
      this.moveToUnderstood();
    });
  }
}

export { Card };
