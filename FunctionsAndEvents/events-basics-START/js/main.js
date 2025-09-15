console.log("Javascript linked");

// Select the add count button
let addButton = document.querySelector(".btn-increment");

// Write an event handler for incrementing count
function addToCount() {
  console.log("This event was handled");
  // Select the count text
  let counterText = document.querySelector(".counter");
  // Update the count text with the new value
  counterText.innerText = parseInt(counterText.innerText) + 1;
}

// Bind the event listener to the button
addButton.addEventListener("click", addToCount);

// Prevent default behaviour on link
document.querySelector(".link").addEventListener("click", (event) => {
  event.preventDefault();

  // Now I can replace the default with whatever I like
});

// Prevent default behaviour on form
document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
});
