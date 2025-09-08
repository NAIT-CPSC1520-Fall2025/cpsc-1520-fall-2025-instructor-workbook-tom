console.log("JS Successfully linked");

// This finds the paragraph to update and fixes the typos
let updateTextParagraph = document.getElementById("paragraph-text");
// console.log(updateTextParagraph.innerText);
let fixedText = "Corrected the typos in this text!";

updateTextParagraph.innerText = fixedText;

let updateHTMLParagraph = document.querySelector("#update-html > p");
// console.log(updateHTMLParagraph.innerHTML);
updateHTMLParagraph.innerHTML =
  "<strong> Wrap this text in strong tags.</strong>";

let updateColorH2Element = document.querySelector("#update-colour > h2");
console.log(updateColorH2Element.innerText);

updateColorH2Element.innerText = "I changed this color to blue";

let updateColorPElement = document.querySelector("#update-colour > p");
updateColorPElement.style.color = "green";

updateTextParagraph.style.color = "red";
