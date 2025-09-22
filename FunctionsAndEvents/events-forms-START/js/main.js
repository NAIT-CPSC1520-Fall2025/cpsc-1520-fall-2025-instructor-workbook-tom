// this is our javascript file.
console.log("Javascript Online!!!!!");
// intercept the form.
let formElement = document.querySelector("#budget-form");
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

// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
const addBudgetLine = (title, amount, description) => {
  let newItem = `<li class="list-group-item list-group-item-action" aria-current="true">
    ${title} (${amount}) - ${description}
  </li>`;
  let budgetList = document.querySelector(".current-budget");
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

// remove active class from list item on mouseout.
