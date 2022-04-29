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
          tile.classList.add("tile");
          break;
        case 1:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "cloud");
          tile.classList.add("tile");
          break;
        case 2:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "leaves");
          tile.classList.add("tile");
          break;
        case 3:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "wood");
          tile.classList.add("tile");
          break;
        case 4:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "grass");
          tile.classList.add("tile");
          break;
        case 5:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "dirt");
          tile.classList.add("tile");
          break;
        case 6:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "stone");
          tile.classList.add("tile");
          break;
        case 7:
          tile.setAttribute("data-is-active", true);
          tile.setAttribute("data-name", "sun");
          tile.classList.add("tile");
          break;
      }
      gameBoard.appendChild(tile);
    }
  }
}
draw();

const tools = document.querySelectorAll(".tool");
for (let tool of tools) {
  tool.setAttribute("data-is-open", false);
  // tool.setAttribute("data-is-right", true);
}

const pickAxe = tools[0];
const shovel = tools[1];
const axe = tools[2];

const tiles = document.querySelectorAll(".tile");
// console.log(tiles[28]);
const storage = document.querySelector(".storage");

pickAxe.addEventListener("click", function (e) {
  this.setAttribute("data-is-open", true);
  shovel.setAttribute("data-is-open", false);
  axe.setAttribute("data-is-open", false);
  this.style.backgroundColor = "rgb(48, 113, 154)";
  shovel.style.backgroundColor = "rgb(129, 198, 255";
  axe.style.backgroundColor = "rgb(129, 198, 255";
  storage.style.border = "white 2px solid";
  if (this.getAttribute("data-is-open")) {
    for (let tile of tiles) {
      tile.addEventListener("click", function () {
        if (tile.getAttribute("data-name") === "stone") {
          const isActive = this.getAttribute("data-is-active");
          if (isActive) {
            this.setAttribute("data-is-active", false);
            const tileName = this.getAttribute("data-name");
            storage.setAttribute("data-name", tileName);
          }
        } else {
          this.setAttribute("data-is-active", true);
        }
        // else {
        //   pickAxe.setAttribute("data-is-right", false);
        // }
      });
    }
  }
});

shovel.addEventListener("click", function (e) {
  this.setAttribute("data-is-open", true);
  pickAxe.setAttribute("data-is-open", false);
  axe.setAttribute("data-is-open", false);
  this.style.backgroundColor = "rgb(48, 113, 154)";
  pickAxe.style.backgroundColor = "rgb(129, 198, 255";
  axe.style.backgroundColor = "rgb(129, 198, 255";
  storage.style.border = "white 2px solid";
  if (this.getAttribute("data-is-open")) {
    for (let tile of tiles) {
      tile.addEventListener("click", function () {
        if (tile.getAttribute("data-name") === "dirt" || tile.getAttribute("data-name") === "grass") {
          const isActive = this.getAttribute("data-is-active");
          if (isActive) {
            this.setAttribute("data-is-active", false);
            const tileName = this.getAttribute("data-name");
            storage.setAttribute("data-name", tileName);
          }
        } else {
          this.setAttribute("data-is-active", true);
        }
        // else {
        //   pickAxe.setAttribute("data-is-right", false);
        // }
      });
    }
  }
});

axe.addEventListener("click", function (e) {
  this.setAttribute("data-is-open", true);
  pickAxe.setAttribute("data-is-open", false);
  shovel.setAttribute("data-is-open", false);
  this.style.backgroundColor = "rgb(48, 113, 154)";
  pickAxe.style.backgroundColor = "rgb(129, 198, 255";
  shovel.style.backgroundColor = "rgb(129, 198, 255";
  storage.style.border = "white 2px solid";
  if (this.getAttribute("data-is-open")) {
    for (let tile of tiles) {
      tile.addEventListener("click", function () {
        if (tile.getAttribute("data-name") === "wood" || tile.getAttribute("data-name") === "leaves") {
          const isActive = this.getAttribute("data-is-active");
          if (isActive) {
            this.setAttribute("data-is-active", false);
            const tileName = this.getAttribute("data-name");
            storage.setAttribute("data-name", tileName);
          }
        } else {
          this.setAttribute("data-is-active", true);
        }
        // else {
        //   pickAxe.setAttribute("data-is-right", false);
        // }
      });
    }
  }
});

storage.addEventListener("click", function () {
  pickAxe.style.backgroundColor = "rgb(129, 198, 255";
  shovel.style.backgroundColor = "rgb(129, 198, 255";
  axe.style.backgroundColor = "rgb(129, 198, 255";
  this.style.border = "2px solid blue";
  console.log(this.getAttribute("data-name"));
  if (this.getAttribute("data-name") !== null) {
    for (let tile of tiles) {
      tile.addEventListener("click", function () {
        // console.log(tile);
        const isActive = this.getAttribute("data-is-active");
        // console.log("this is", this);
        // console.log("isActive", isActive);
        if (isActive === "false" || (this.getAttribute("data-name") === "sky" && storage.getAttribute("data-name") !== null)) {
          // console.log("inside if", this);
          const name = storage.getAttribute("data-name");
          this.setAttribute("data-name", name);
          this.setAttribute("data-is-active", true);
          storage.removeAttribute("data-name");
        }
      });
    }
  }
});
