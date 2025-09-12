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
  let uName = getUsername();
  // Update element with the new text
  updateElementText("#username", uName);
};

// Display description
const updateDescription = () => {
  // Call our prompt function
  let description = getDescription();
  // Update element with the new text
  updateElementText(".description", description);
};

// Create a function that updates an element to display new text
const updateElementText = (selector, text) => {
  // Select the element with the given selector
  let element = document.querySelector(selector);
  // Update the innerText of the selected element
  element.innerText = text;
};

const greetPerson = (name, prefix) => {
  let greeting = "Hello " + prefix + name;
  console.log(greeting);
};

greetPerson("Jade", "Ms.");

greetPerson("Mahdi", "Diamond");

updateDescription();
updateUsername();
