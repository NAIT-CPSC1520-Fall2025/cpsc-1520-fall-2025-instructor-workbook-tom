const moveGreenBox = (x, y) => {
  // select the green-box
  let greenBox = document.querySelector(".green-box");
  // modify the style attributes of the green-box of the
  greenBox.style.position = "absolute";
  // top and left with the position of the event.
  greenBox.style.top = `${y}px`;
  greenBox.style.left = `${x}px`;
};

export { moveGreenBox };
