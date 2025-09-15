// this is our javascript file.
console.log("Javascript has been linked");

// select the entire body and main of the document.
let body = document.querySelector("body");
let main = document.querySelector("main");

// add an event listener to the body on the mousemove
body.addEventListener("mousemove", (event) => {
  console.log(event.x, event.y);
  // select the green-box
  // modify the style attributes of the green-box of the
  // top and left with the position of the event.
});

body.addEventListener("click", (event) => {
  let newBoxTemplate = `<div class="blue-box" style="top: ${Y}px; left: ${X}px"></div>`;
  // add an event listener to click that will add a blue box to the main innerHTML
  // at the position of the mouse.
});
