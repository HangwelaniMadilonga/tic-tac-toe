let playGame = () => {};

function createBoard() {
  let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let firstPlayer = createPlayer("X");
  let secondPlayer = createPlayer("O");
  let computerPlayer = createPlayer("O");
  let screen = controlScreen(gameBoard);

  function initialiseBoard() {
    gameBoard.forEach((cell) => {
      const div = document.createElement("div");
      div.classList.add("cell");
    });
  }
}

function createPlayer(playerSymbol) {
  const playerSymbol = playerSymbol;
  let point = 0;
  const getPoint = () => point;
  const givePoint = () => point++;

  return { playerSymbol, getPoint, givePoint };
}

let controlScreen = (gameBoard, playerSymbol) => {
  let addGameBoard = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.setAttribute("data-index", `${i}-${j}`);
        div.addEventListener("click", () => {
          const dataIndex = div.dataset.index;
          const [i, j] = dataIndex.split("-").map(Number);
          gameBoard[i][j] = playerSymbol;
        });
      }
    }
  };

  let beginGame = () => {};
};

let;
//what does the display screen do?
/*
  it returns functions for manipulating the screen.
  we create the 
  sdf*/
