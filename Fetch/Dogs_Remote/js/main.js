/*
Fetch Fundamentals
In this example we're going to generate random pictures of dogs.
1. Select the random dog button and add a click event
    listener on it.
2. Create the function get random dog with the fetch api.
    - documentation for the dog api here https://dog.ceo/dog-api/
    - explore and display what the promise returns.
3. Create a function that will select the image 
4. Call the get random dog function in your event listener,
    and call it when the page loads.
*/

let buttonEl = document.querySelector("#new-dog-button");

buttonEl.addEventListener("click", () => {
  getRandomDog().then((url) => {
    displayDogImage(url);
  });
});

// buttonEl.addEventListener("click", async () => {
//   let url = await getRandomDog();
//   displayDogImage(url);
// });

// Async/Await syntax
const getRandomDog = async () => {
  // Fetch the dog
  let response = await fetch("https://dog.ceo/api/breeds/image/random");

  // Get the json from the response -> turn it into an object
  let data = await response.json();

  // Get the url from the object
  let url = data.message;
  // let url = data["message"];

  console.log(url);

  // Return that
  return url;
};

const getRandomDogPromise = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.message;
    });
};

const displayDogImage = (imageUrl) => {
  // Select the image element
  let dogImageEl = document.querySelector(".dog-image");

  // Set the src attribute to the imageURL
  dogImageEl.setAttribute("src", imageUrl);
};
