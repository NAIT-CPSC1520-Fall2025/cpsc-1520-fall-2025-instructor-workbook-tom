// this is our javascript file.
console.log("Javascript Online!!!!!");
// intercept the form.
let formElement = document.querySelector("#budget-form");
let budgetList = document.querySelector(".current-budget");

// focus to the first element
formElement.elements[0].focus();

// create an event listener on the form.
formElement.addEventListener("submit", (e) => {
  // prevent the form from being submitted.
  e.preventDefault();

  // get the form element values for title, description and amount
  // Can interact with the form through the selected element or the event target element
  let titleElement = e.target.elements[0];
  let amountElement = formElement.elements.amount;
  let descriptionElement = e.target.elements["budget-description"];

  // get the form values.
  let titleValue = titleElement.value;
  let amountValue = amountElement.value;
  let descriptionValue = descriptionElement.value;

  // TODO: Before adding a budget line item, validate each field
  // Use a flag to track the state of the form (used for submitting not for visuals)
  // Start by assuming the form is valid, adjust assumption if you find one invalid field
  let isFormValid = true;

  // Check the title
  let isTitleValid = !isTextEmpty(titleValue);
  if (isTitleValid) {
    // TODO: Make sure there is no red border
  } else {
    // TODO: Add a red border
    // Lower our flag
    isFormValid = false;
  }

  // TODO: Check the description

  // TODO: Check the amount

  // add the item
  addBudgetLine(titleValue, amountValue, descriptionValue);

  // update current budget total
  updateTotal(amountValue);

  // reset the values
  // titleElement.value = "";
  // amountElement.value = "";
  // descriptionElement.value = "";
  formElement.reset();

  // focus back at the title
  formElement.elements[0].focus();
});

// Create a function that checks if text is empty
const isTextEmpty = (value) => {
  // Option 1
  // if (value === "") {
  // Option 2
  if (value.length === 0) {
    return true;
  } else {
    return false;
  }
  // Optimized option
  // return value.trim() === "";
};

// Create a function that checks if number is greater than zero
const isGreaterThanZero = (value) => {
  if (parseFloat(value) > 0) {
    return true;
  } else {
    return false;
  }
};

const addBudgetLine = (title, amount, description) => {
  let newItem = `<li class="list-group-item list-group-item-action" aria-current="true">
    ${title} (${amount}) - ${description}
  </li>`;
  budgetList.innerHTML += newItem;
};

// add a updateTotal function
const updateTotal = (amount) => {
  // Parse the current amount from the dom
  let budgetElement = document.querySelector("#budget-total");
  let currentAmount = parseFloat(budgetElement.innerText);
  // Add the amount to the current amount
  currentAmount += parseFloat(amount);
  // Update the dom with the new value
  budgetElement.innerText = currentAmount;
};

// add active class to list item on mouseover
budgetList.addEventListener("mouseover", (event) => {
  event.target.classList.add("active");
});

// remove active class from list item on mouseout.
budgetList.addEventListener("mouseout", (event) => {
  event.target.classList.remove("active");
});
