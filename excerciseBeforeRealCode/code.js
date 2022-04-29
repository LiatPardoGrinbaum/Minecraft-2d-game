//some of my excercises to understand topics such as data attributes and matrix drawing, before I get to code the real game.
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  console.log(box.getAttribute("data-color"));
  if (box.getAttribute("data-color") === "purple") {
    box.setAttribute("data-is-active", false);
  }
  console.log(box.getAttribute("data-is-active"));
});

const gameBoard = document.querySelector(".grid");

const matrix = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
];

function draw() {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      const tile = document.createElement("div");
      switch (matrix[row][column]) {
        case 0:
          tile.className = "sky";
          break;
        case 1:
          tile.className = "leaves";
          break;
        case 2:
          tile.className = "wood";
          break;
      }
      gameBoard.appendChild(tile);
    }
  }
}
draw();
