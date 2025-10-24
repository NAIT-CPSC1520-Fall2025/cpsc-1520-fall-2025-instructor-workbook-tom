// TODO Step 1: create an array that represents our dino objects
let dinos = [];

// TODO Step 2: create HTML element variable for the table body

let tableBodyElement = document.querySelector("tbody");

const dinoBreeds = [
  "Tyrannosaurus Rex",
  "Triceratops",
  "Velociraptor",
  "Stegosaurus",
  "Archaeopteryx",
  "Apatosaurus",
  "Iguanodon",
  "Deinonychus",
].sort();

// TO DO Step 3: populate the drop down list of breeds
let dinoBreedsDropdown = document.querySelector("#dino-species");
// for (dinoBreed of dinoBreeds) {}
dinoBreeds.forEach((dinoBreed) => {
  dinoBreedsDropdown.innerHTML += `<option>${dinoBreed}</option>`;
});

// HTML syntax:
// <option>BREED</option>

// TO DO Step 4: create a no-param function called renderTable()
const renderTable = () => {
  // TODO: Make a function for diet (carnivore, herbivore, omnivore)
  // TODO: Reset the dinos table (visuals)
  // TODO: Loop through dinos array
  // TODO: For each dino - assign values to template HTML
  // TODO: Append the template HTML to the page
};

// HTML syntax:
//   <tr>
//     <td>INSERT NAME</td>
//     <td>INSERT SPECIES</td>
//     <td>INSERT AGE</td>
//     <td>INSERT DIET</td>
//     <td class="remove" data-dino-id="INSERT NUMBER">REMOVE</td>
//   </tr>

// TO DO Step 5: create a no-param function called renderStats()
const renderStats = () => {
  // Option A - Do all calculations here
  // TODO: Create counters for each
  // TODO: Loop through all the dinosaurs
  // TODO: For each check diet type - increment given counter
  // TODO: For each add age to total age
  // TODO: After loop - update total dinos, compute avg age
  // TODO: Set the respective elements innerText to match values
  // Option B - Split each calculation into its own function
  // TODO: Calculate each diet type count in a reduce function (or loop)
  // TODO: Calculate average age in reduce function (or loop)
  // TODO: Set the respective elements innerText to match values
};

// TO DO Step 6: add an event handler to the form (select, submit event)
// 1. get form values (.value, .checked)
// 2. create a new dino with the following properties: id, name, species, birthYear, isMeatEater, and isPlantEater
// 3. add the new dino object to the array
// 4. call renderTable()
// 5. call renderStats()
document.querySelector("#input-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let dinoName = event.target.elements["dino-name"].value;
  let dinoSpecies = event.target.elements["dino-species"].value;
  let dinoYear = event.target.elements["dino-year"].value;
  let eatsMeat = event.target.elements["dino-carnivore"].checked;
  let eatsPlants = event.target.elements["dino-herbivore"].checked;

  let dino = {
    id: dinos.length,
    name: dinoName,
    species: dinoSpecies,
    birthYear: dinoYear,
    isMeatEater: eatsMeat,
    isPlantEater: eatsPlants,
  };

  dinos.push(dino);

  renderTable();

  renderStats();
});

// CHALLENGE: using a loop, print out all properties & their values to the console
// CHALLENGE: add input validation: name cannot be empty, species cannot be empty, year cannot be negative or in the future, and a dino must check at least one box

// CHALLENGE TO DO Step 7: add ability to remove dino

// TO DO: finishing touches: do we need any focus or reset?

// CHALLENGE TO DO Step 8: delete the following & add the missing logic!
// if there are no dinosaurs, we should show the .temp message.
// otherwise, we'll show the table & stats
document.querySelector("#table-section table").classList.remove("hide");
document.querySelector("#table-section p").classList.add("hide");
document.querySelector(".dino-stats").classList.remove("hide");
document.querySelector(".stats-section p.temp").classList.add("hide");

// TO DO Step 9: create a function called getDinosFromFile()
// this function will read in the json file from the data folder, parse its contents, then populate the dinos array asynchronously
// finally, it will call the appropriate functions to render the content on the page
// this function should be called once when the page is initially loaded
