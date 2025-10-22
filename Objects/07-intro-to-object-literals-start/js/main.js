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

  let numberOfCompleteTodos = todos.reduce((previousValue, currentTodo) => {
    console.log(previousValue);
    console.log(currentTodo);

    // If the todo is complete add 1 to the count of complete todos
    if (currentTodo.complete) {
      previousValue += 1;
    }
    return previousValue;
  }, 0);

  // TODO: Display this in the HTML as a percentage
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let todoDescription = event.target.elements["todo-description"].value;

  // Create a new todo object and add it to the todos array
  let newTodo = {
    description: todoDescription,
    completed: false,
  };

  todos.push(newTodo);

  console.log(todos);
  renderTodos();
});

// TODO: Add functionality to allow checking off todos

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
