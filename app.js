let playGame = () => {
  createBoard();
};

function createBoard() {
  let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let firstPlayer = createPlayer("X");
  let secondPlayer = createPlayer("O");
  let computerPlayer = createPlayer("O");
  let isFirstTurn = true;
  let isPlaying = true;

  if (isFirstTurn) {
    let screen = controlScreen(gameBoard, firstPlayer.playerSymbol);
    screen.beginGame();
    isFirstTurn = !isFirstTurn;
  } else {
    let screen = controlScreen(gameBoard, secondPlayer.playerSymbol);
    isFirstTurn = !isFirstTurn;
  }
}

function createPlayer(playerSymbol) {
  let point = 0;
  const getPoint = () => point;
  const givePoint = () => point++;
  return { playerSymbol, getPoint, givePoint };
}

let controlScreen = (gameBoard, playerSymbol) => {
  let addGameBoard = () => {
    let gameContainer = document.querySelector(".game-container");
    while (gameContainer.firstChild) {
      gameContainer.removeChild(gameContainer.firstChild);
    }

    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.setAttribute("data-index", `${i}-${j}`);
        gameContainer.appendChild(div);
        div.addEventListener("click", () => {
          const dataIndex = div.dataset.index;
          const [i, j] = dataIndex.split("-").map(Number);
          gameBoard[i][j] = playerSymbol;
          div.textContent = gameBoard[i][j];
        });
      }
    }
  };

  let beginGame = () => {
    let gametypeButtons = document.querySelectorAll(".selection-button");
    let firstPhase = document.querySelector("#game-initial-phase");
    gametypeButtons.forEach((element) => {
      element.addEventListener("click", () => {
        firstPhase.style.display = "none";
        addGameBoard();
      });
    });
  };

  return { beginGame };
};
playGame();
/*
  we cant use a number because it i

  sdf*/
