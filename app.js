const game = {
  matrix: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 7, 7, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 4, 4, 4, 6, 6, 0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 6, 6, 0, 0, 0, 0],
    [5, 5, 5, 5, 5, 6, 6, 6, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0],
    [5, 5, 5, 5, 5, 4, 4, 6, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0],
    [5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  ],
  gameBoard: document.querySelector(".board"),
  storage: document.querySelector(".storage"),
  tools: setTools(),
  tiles: setTiles(),
};

//create the textures elements as divs and draw the board game by giving it attributes and classes
function draw() {
  for (let row = 0; row < game.matrix.length; row++) {
    for (let column = 0; column < game.matrix[row].length; column++) {
      const tile = document.createElement("div");
      switch (game.matrix[row][column]) {
        case 0:
          tile.setAttribute("data-is-active", "true");
          tile.setAttribute("data-name", "sky");
          tile.classList.add("tile");
          break;
        case 1:
          tile.setAttribute("data-is-active", "true");
          tile.setAttribute("data-name", "cloud");
          tile.classList.add("tile");
          break;
        case 2:
          tile.setAttribute("data-is-active", "true");
          tile.setAttribute("data-name", "leaves");
          tile.classList.add("tile");
          break;
        case 3:
          tile.setAttribute("data-is-active", "true");
          tile.setAttribute("data-name", "wood");
          tile.classList.add("tile");
          break;
        case 4:
          tile.setAttribute("data-is-active", "true");
          tile.setAttribute("data-name", "grass");
          tile.classList.add("tile");
          break;
        case 5:
          tile.setAttribute("data-is-active", "true");
          tile.setAttribute("data-name", "dirt");
          tile.classList.add("tile");
          break;
        case 6:
          tile.setAttribute("data-is-active", "true");
          tile.setAttribute("data-name", "stone");
          tile.classList.add("tile");
          break;
        case 7:
          tile.setAttribute("data-is-active", "true");
          tile.setAttribute("data-name", "sun");
          tile.classList.add("tile");
          break;
      }
      game.gameBoard.appendChild(tile);
    }
  }
}
draw();

//create an array of tools divs and give it an attribute, add it to the game object
function setTools() {
  const tools = document.querySelectorAll(".tool");
  const arr = [];
  for (let tool of tools) {
    tool.setAttribute("data-is-open", "false");
    arr.push(tool);
  }
  return arr;
}

//define varaibles for the tools
[pickAxe, shovel, axe] = game.tools;
//note to myself! (check why couldnt I put it inside the object as destrcturing array)
//or couldnt use inside object tool : this.tools[0]

//create an array of the tiles
function setTiles() {
  const tiles = document.querySelectorAll(".tile");
  const arr = [];
  for (let tile of tiles) {
    arr.push(tile);
  }
  return arr;
}
const tiles = setTiles();
//for some reason i coudlnt add setTiles() as a varaible in the object like i did with setTools. it return an empty object.!!

function resetDataTools() {
  game.tools.map((tool) => {
    tool.setAttribute("data-is-open", "false");
    tool.style.backgroundColor = "transparent";
  });
  game.storage.style.border = "white 2px solid";
}

function isValid(tile) {
  const isActive = tile.getAttribute("data-is-active");
  if (isActive) {
    tile.setAttribute("data-is-active", "false");
    const tileName = tile.getAttribute("data-name");
    game.storage.setAttribute("data-name", tileName);
  }
}

function isNotValid(tile) {
  tile.setAttribute("data-is-active", "true");
  // tile.style.border = "red 1px solid";
}
function mainGame() {
  for (let tool of game.tools) {
    tool.addEventListener("click", function (e) {
      resetDataTools();
      this.setAttribute("data-is-open", "true");
      this.style.backgroundColor = "rgb(48, 113, 154)";
      if (this.getAttribute("data-is-open")) {
        for (let tile of tiles) {
          tile.addEventListener("click", function () {
            if (this.getAttribute("data-name") === "stone" && tool.classList.contains("pickaxeTool")) {
              isValid(this);
            } else if (this.getAttribute("data-name") === "dirt" && tool.classList.contains("shovelTool")) {
              isValid(this);
            } else if (this.getAttribute("data-name") === "grass" && tool.classList.contains("shovelTool")) {
              isValid(this);
            } else if (this.getAttribute("data-name") === "wood" && tool.classList.contains("axeTool")) {
              isValid(this);
            } else if (this.getAttribute("data-name") === "leaves" && tool.classList.contains("axeTool")) {
              isValid(this);
            } else {
              isNotValid(this);
            }
          });
        }
      }
    });
  }
}

mainGame();

game.storage.addEventListener("click", function () {
  resetDataTools();
  this.style.border = "2px solid blue";

  if (this.getAttribute("data-name") !== "null") {
    for (let tile of tiles) {
      tile.addEventListener("click", function () {
        const isActive = this.getAttribute("data-is-active");

        if (game.storage.getAttribute("data-name") !== "null") {
          console.log(typeof game.storage.getAttribute("data-name"));
          console.log(game.storage.getAttribute("data-name"));
          console.log("hii");
          if (isActive === "false" || this.getAttribute("data-name") === "sky") {
            const name = game.storage.getAttribute("data-name");
            console.log(game.storage);
            this.setAttribute("data-name", name);
            this.setAttribute("data-is-active", "true");
            game.storage.setAttribute("data-name", "null");
            console.log(game.storage);
          }
        }
      });
    }
  }
});
