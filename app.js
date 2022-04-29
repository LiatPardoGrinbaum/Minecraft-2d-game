// const state = {
//   draw: draw(),
// };

const gameBoard = document.querySelector(".board");

const matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 7, 7, 7, 7, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0, 7, 7, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
  [0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0],
  [4, 4, 4, 4, 4, 6, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 6],
  [5, 5, 5, 5, 5, 6, 6, 6, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 6],
  [5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

function draw() {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      const tile = document.createElement("div");
      switch (matrix[row][column]) {
        case 0:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "sky");
          break;
        case 1:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "cloud");
          break;
        case 2:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "leaves");
          break;
        case 3:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "wood");
          break;
        case 4:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "grass");
          break;
        case 5:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "dirt");
          break;
        case 6:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "stone");
          break;
        case 7:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "sun");
          break;
      }
      gameBoard.appendChild(tile);
    }
  }
}
draw();
