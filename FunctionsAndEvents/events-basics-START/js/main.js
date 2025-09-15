console.log("Javascript linked");

// Select the add count button
let addButton = document.querySelector(".btn-increment");

let count = 0;
// Write an event handler for incrementing count
function addToCount() {
  console.log("This event was handled");
  // Increment the count variable
  count += 1; // Same as count = count + 1;
  // Select the count text
  let counterText = document.querySelector(".counter");
  // Update the count text with the new value
  counterText.innerText = count;
}

// Bind the event listener to the button
addButton.addEventListener("click", addToCount);
