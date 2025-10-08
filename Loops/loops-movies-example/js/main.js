// this is our javascript file.

let movieFilterForm = document.querySelector("#movie-filter-form");

// focus on the filter element
movieFilterForm.elements["filter-query"].focus();

// intercept the form.
movieFilterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let filter = event.target.elements["filter-query"].value;

  filterItems(filter);
});

// select all movie list items the descendant css selector
// .top-movies-list li

// get the form value and call the function filterItems

/*


We're going to create a function named "filterItems"
that check each item contains our search query
- if it's not then we're going to add the "hidden-item" class
- if does include it we're going to remove the "hidden-item" class.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

*/

const filterItems = (filterValue) => {
  console.log("this was filtered with: " + filterValue);

  let allMovieElements = document.querySelectorAll(".top-movies-list li");
  for (let i = 0; i < allMovieElements.length; i++) {
    // Get the indexed movie element
    let movieElement = allMovieElements[i];
    // check if the innerText of that element .includes() the filter
    if (
      movieElement.innerText.toLowerCase().includes(filterValue.toLowerCase())
    ) {
      // if it does remove .hidden-item
      movieElement.classList.remove("hidden-item");
    } else {
      // else add .hidden-item
      movieElement.classList.add("hidden-item");
    }
  }
};
