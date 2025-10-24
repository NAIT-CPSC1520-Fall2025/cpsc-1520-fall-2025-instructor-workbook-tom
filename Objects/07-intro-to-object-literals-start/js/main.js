/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            data-todo-id="INDEX HERE"
            type="checkbox"
            value="todo-INDEX HERE"
            COMPLETE HERE>
        DESCRIPTION HERE
    </li>

*/

let todos = [
  {
    description: "Todo 1",
    complete: false,
  },
  {
    description: "Todo 2",
    complete: true,
  },
];

let todoForm = document.querySelector("#add-todo-form");

const calculateCompleteCount = () => {
  // Checks all todos and calculates the percentage complete
  // Then updates the HTML to display that count

  // Option 1: Reduce
  // let numberOfCompleteTodos = todos.reduce((previousValue, currentTodo) => {
  //   console.log(previousValue);
  //   console.log(currentTodo);

  //   // If the todo is complete add 1 to the count of complete todos
  //   if (currentTodo.complete) {
  //     previousValue += 1;
  //   }
  //   return previousValue;
  // }, 0);

  // Option 2: Loop
  let numberOfCompleteTodos = 0;
  todos.forEach((todo) => {
    if (todo.complete) {
      numberOfCompleteTodos += 1;
    }
  });

  // Display this in the HTML as a percentage
  let completeCountElement = document.querySelector("#todo-complete-count");
  completeCountElement.innerHTML = `${
    (numberOfCompleteTodos / todos.length) * 100
  }%`;
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let todoDescription = event.target.elements["todo-description"].value;

  // Create a new todo object and add it to the todos array
  let newTodo = {
    description: todoDescription,
    complete: false,
  };

  todos.push(newTodo);

  renderTodos();
});

// Add functionality to allow checking off todos
let todoListElement = document.querySelector(".todo-list");
todoListElement.addEventListener("change", (event) => {
  let todoCheckbox = event.target;

  let todoIndex = todoCheckbox.getAttribute("data-todo-id");

  // Update the data to match the visuals by toggling the complete property
  todos[todoIndex].complete = !todos[todoIndex].complete;

  calculateCompleteCount();
});

const renderTodos = () => {
  // This function redraws the todolist to match the data structure
  let todolist = document.querySelector(".todo-list");
  // Empty the todolist (visuals)
  todolist.innerHTML = "";
  // For each TODO (I recommend a regular for loop)
  for (let i = 0; i < todos.length; i++) {
    // Add the todo to the visuals
    let todo = todos[i];
    todolist.innerHTML += `
    <li class="list-group-item">
        <input class="form-check-input todo-status"
            data-todo-id="${i}"
            type="checkbox"
            value="todo-${i}"
           ${todo.complete ? "checked" : ""}>
        ${todo.description}
    </li>
    `;
  }
  calculateCompleteCount();
};

renderTodos();
