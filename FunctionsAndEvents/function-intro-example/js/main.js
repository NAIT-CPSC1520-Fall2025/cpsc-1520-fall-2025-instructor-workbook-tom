// this is our javascript file.
console.log("Script loaded");

// Prompt the User for their username
const getUsername = function () {
  // Prompt the user
  let userName = prompt("What is your username?");
  // return the user's input
  return userName;
};

// Prompt the User for a description
function getDescription() {
  // Prompt the user
  let description = prompt("Please enter a description");
  // Return the user's input
  return description;
}

// Display the Username
const updateUsername = () => {
  // Call our prompt function
  let userName = getUsername();
  // Update element with the new text
  updateElementText("#username", userName);
};

// TODO: Display description
const updateDescription = () => {
  // TODO: Call our prompt function
  // TODO: Update element with the new text
};

// TODO: Create a function that updates an element to display new text
const updateElementText = (selector, text) => {
  // TODO: Select the element with the given selector
  // TODO: Update the innerText of the selected element
};
