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
  allMovieElements.forEach((movieElement) => {
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
  });
  //   let i = 0;
  //   while (i < allMovieElements.length) {
  //     // Get the indexed movie element
  //     let movieElement = allMovieElements[i];
  //     // check if the innerText of that element .includes() the filter
  //     if (
  //       movieElement.innerText.toLowerCase().includes(filterValue.toLowerCase())
  //     ) {
  //       // if it does remove .hidden-item
  //       movieElement.classList.remove("hidden-item");
  //     } else {
  //       // else add .hidden-item
  //       movieElement.classList.add("hidden-item");
  //     }
  //     i++;
  //   }
};

// let allMovieElements = document.querySelectorAll(".top-movies-list li");

// for (let i = 0; i < allMovieElements.length; i++) {
//   const movie = allMovieElements[i];
//   console.log(movie.innerText);
// }

// allMovieElements.forEach((movie) => {
//   console.log(movie.innerText);
// });

// let lowerCaseTitles = allMovieElements.map((movie) => {
//   return movie.innerText.toLowerCase();
// });

// let filteredMovies = allMovieElements.filter((movie) => {
//   return movie.innerText.includes("God");
// });

// let grades = [0, 100, 32, 98, 74, 12, 46, 86, 58, 77];

// let classAverage = grades.reduce((avg, grade) => {
//   return avg + grade / grades.length;
// });

// let avg = 0;
// for (let i = 0; i < grades.length; i++) {
//   const grade = grades[i];
//   avg = avg + grade / grades.length;
// }

// let averg = 0;
// grades.forEach((grade) => {
//   averg = averg + grade / grades.length;
// });
