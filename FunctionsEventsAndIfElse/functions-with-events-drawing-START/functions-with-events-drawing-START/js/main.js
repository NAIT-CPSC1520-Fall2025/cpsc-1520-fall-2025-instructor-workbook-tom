import { moveGreenBox } from "./utilities";

// this is our javascript file.
console.log("Javascript has been linked");

// select the entire body and main of the document.
let body = document.querySelector("body");
let main = document.querySelector("main");

// This flag tells us whether the mouse is down
let isMouseDown = false;

// add an event listener to the body on the mousemove
body.addEventListener("mousemove", (event) => {
  // Move the green box
  moveGreenBox(event.x, event.y);

  if (isMouseDown) {
    // Draw a blue box
    let newBoxTemplate = `<div class="blue-box" style="top: ${event.y}px; left: ${event.x}px"></div>`;

    main.innerHTML += newBoxTemplate;
  }
});

body.addEventListener("mousedown", () => {
  isMouseDown = true;
});

body.addEventListener("mouseup", () => {
  isMouseDown = false;
});
