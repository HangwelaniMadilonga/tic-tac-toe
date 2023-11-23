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

  let isPlaying = true;
  let screen = controlScreen(
    gameBoard,
    firstPlayer.playerSymbol,
    secondPlayer.playerSymbol
  );
  screen.beginGame();
}

function createPlayer(playerSymbol) {
  let point = 0;
  const getPoint = () => point;
  const givePoint = () => point++;
  return { playerSymbol, getPoint, givePoint };
}

let controlScreen = (gameBoard, firstplayerSymbol, secondplayerSymbol) => {
  let addGameBoard = () => {
    let gameContainer = document.querySelector(".game-container");
    let gameTracker = 1;
    let playerSymbol = "";
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
          if (gameTracker % 2 === 0) {
            playerSymbol = secondplayerSymbol;
          } else {
            playerSymbol = firstplayerSymbol;
          }
          const dataIndex = div.dataset.index;
          const [i, j] = dataIndex.split("-").map(Number);
          if (div.textContent === "") {
            gameBoard[i][j] = playerSymbol;
            div.textContent = gameBoard[i][j];
            gameTracker = gameTracker + 1;
          }
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
  for every div with class cell we can say that if the number is odd then it

  sdf*/
