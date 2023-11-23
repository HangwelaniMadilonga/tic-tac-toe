let playGame = () => {
  createBoard();
};

function createBoard() {
  let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let firstPlayer = createPlayer("X");
  let secondPlayer = createPlayer("O");

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
          const [row, col] = dataIndex.split("-").map(Number);
          if (div.textContent === "" && gameBoard[row][col] === null) {
            gameBoard[row][col] = playerSymbol;
            div.textContent = playerSymbol;
            gameTracker++;
            checkGameState();
          }
        });
      }
    }
  };

  let checkGameState = () => {
    let result = checkWinOrDraw(gameBoard);
    if (result.win) {
      highlightWinningCells(result.winningCombination);
      setTimeout(() => {
        alert(result.winner + " wins!");
        resetGame();
      }, 200);
    } else if (result.draw) {
      setTimeout(() => {
        alert("It's a draw!");
        resetGame();
      }, 200);
    }
  };

  let highlightWinningCells = (winningCombination) => {
    winningCombination.forEach(([row, col]) => {
      let cell = document.querySelector(`[data-index="${row}-${col}"]`);
      cell.style.backgroundColor = "green";
    });
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

  let resetGame = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        gameBoard[i][j] = null;
      }
    }

    let gameContainer = document.querySelector(".game-container");
    while (gameContainer.firstChild) {
      gameContainer.firstChild.textContent = "";
      gameContainer.removeChild(gameContainer.firstChild);
    }

    addGameBoard();
  };

  return { beginGame };
};

function checkWinOrDraw(board) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== null
    ) {
      return {
        win: true,
        winner: board[i][0],
        winningCombination: [
          [i, 0],
          [i, 1],
          [i, 2],
        ],
      };
    }
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] !== null
    ) {
      return {
        win: true,
        winner: board[0][i],
        winningCombination: [
          [0, i],
          [1, i],
          [2, i],
        ],
      };
    }
  }

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== null
  ) {
    return {
      win: true,
      winner: board[0][0],
      winningCombination: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
    };
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== null
  ) {
    return {
      win: true,
      winner: board[0][2],
      winningCombination: [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    };
  }

  let isDraw = board.flat().every((cell) => cell !== null);
  if (isDraw) {
    return { draw: true };
  }

  return { win: false, draw: false };
}

playGame();
