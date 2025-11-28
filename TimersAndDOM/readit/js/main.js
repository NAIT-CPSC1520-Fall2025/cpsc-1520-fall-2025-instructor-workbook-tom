/*
Read it, a simple reddit clone.

Add Item piece.
1. Select and add an event listener to the form.
    - get the values of title and url of the inputs.
2. create a function that will piece together the node
   using the dom api that will take the url and title as parameters.
3. Using the Dom create the dom elements in the function
    - create the card
    - create the card body
    - create the up button
    - create the score
    - create the down button
    - create the link
        - you'll use setAttribute here for the href
4. Patch together the pieces
    - append the card body as child to the card
    - append the up button, score, down button and linke to the card body
    - append the card to all the items so that you add it to the page.

Note: Things you can do!
Add validation to this application.

Ranking Piece
1. Select the All of the Items.
2. Add an Event listener on the readit-items list.
3. check if the event.target has the vote-up class or the vote-down class
4. Create the vote up and vote down functions (they'll be similar)
    - get the element with the class card body (the parent of the button)
    using the parentNode (this is called traversing the tree)
    - get the score element by traversing the tree downward using the 
    children list (you have a list of children)
    - create a function (changeScore) to increment the "textContent" of the score element
    by either adding one or subtracting one
5. create a function "changeItemOrder" that will move the card element up or down.
    - pass in the card body element as a 
6. in the changeItemOrder
    - get the parent of the of card body element (the card itself)
    - get the card above it using the dom .previousElementSibling
    - get the card below it using the dom .nextElementSibling
7. swap the items by checking the score
    - create a function swapItemsIfNecessary that will take the card above and below.
    - get the score elements by traversing down the trees twice.
        - first to the the card body element
        - second to get the score element.
    - check if the value of the lower score element is larger than the second element.
    - we're going to use the insertAbove to swap the element places.
8. Add the animation to make it more obvious when the swap places.
    - create functions for moving up and down animation that will each take one paramenter: element
    - add the class up-fade for the up animation 
    - add the class down-fade for the up animation
    - After a second remove the classes using set timeout.

*/

let readitForm = document.querySelector("#add-readit-item");
let allItems = document.querySelector(".readit-items");

readitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = event.target.elements["title"];
  let url = event.target.elements["item-url"];

  addReaditItem(url.value, name.value);
});

const addReaditItem = (url, name) => {
  // Create the card
  let card = document.createElement("div");
  card.classList.add("card", "mt-2");

  // Create the card body
  let body = document.createElement("div");
  body.classList.add("card-body", "d-flex", "flex-row");

  // Create the up button
  let upBtn = document.createElement("button");
  upBtn.classList.add("btn", "vote-up", "m-1", "btn-secondary");
  upBtn.textContent = "Up";
  //   upBtn.appendChild(document.createTextNode("Up"))

  // Create the down button
  let downBtn = document.createElement("button");
  downBtn.classList.add("btn", "vote-down", "m-1", "btn-secondary");
  downBtn.textContent = "Down";

  // Create the score
  let score = document.createElement("p");
  score.classList.add("score", "h4", "m-2");
  score.textContent = "0";

  // Create the link
  let newLink = document.createElement("a");
  newLink.classList.add("h4", "m-2");
  newLink.setAttribute("href", url);
  newLink.textContent = name;

  // Add the content to the card in the correct order
  card.appendChild(body);
  body.appendChild(upBtn);
  body.appendChild(score);
  body.appendChild(downBtn);
  body.appendChild(newLink);

  // Append the card to the list
  allItems.appendChild(card);
};

allItems.addEventListener("click", (event) => {
  let element = event.target;

  if (element.classList.contains("vote-up")) {
    // TODO: upvote the card
    voteUp(element);
  } else if (element.classList.contains("vote-down")) {
    // TODO: downvote the card
    voteDown(element);
  }
});

const voteUp = (buttonElement) => {
  // Select the card body element
  let cardBody = buttonElement.parentNode;
  // Using that select the score element
  let scoreElement = cardBody.children[1];
  // OPTION 2:
  //   let scoreElement = buttonElement.nextElementSibling;

  // Change the score
  changeScore(scoreElement, 1);

  changeItemOrder(cardBody);
};

const voteDown = (buttonElement) => {
  // Select the card body element
  let cardBody = buttonElement.parentNode;
  // Using that select the score element
  let scoreElement = cardBody.children[1];
  // OPTION 2:
  //   let scoreElement = buttonElement.previousElementSibling;

  // Change the score
  changeScore(scoreElement, -1);

  changeItemOrder(cardBody);
};

const changeScore = (scoreEl, difference) => {
  let currScore = parseInt(scoreEl.textContent);
  scoreEl.textContent = currScore + difference;
};

const changeItemOrder = (cardBodyEl) => {
  // Get the card element
  let cardEl = cardBodyEl.parentNode;
  // Look at the neighbouring cards
  let upperCardNeighbour = cardEl.previousElementSibling;
  let lowerCardNeighbour = cardEl.nextElementSibling;
  // Decide if it should swap with them
  if (upperCardNeighbour) {
    swapItemsIfNecessary(upperCardNeighbour, cardEl);
  }
  // If it should swap, do the swap
  if (lowerCardNeighbour) {
    swapItemsIfNecessary(cardEl, lowerCardNeighbour);
  }
};

const swapItemsIfNecessary = (topCardEl, bottomCardEl) => {
  // Get the two element scores
  let topScoreElement = topCardEl.children[0].children[1];
  let bottomScoreElement = bottomCardEl.children[0].children[1];

  // If the bottom element is greater, swap the elements
  if (
    parseInt(bottomScoreElement.textContent) >
    parseInt(topScoreElement.textContent)
  ) {
    // technically this is the same as allItems
    let cardListElement = topCardEl.parentNode;

    cardListElement.insertBefore(bottomCardEl, topCardEl);
  }
  // If less than or equal do nothing
};
