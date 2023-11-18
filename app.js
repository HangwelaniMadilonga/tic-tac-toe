function createBoard (firstName,secondName) {
    let gameBoard=[["","",""],
                   ["","",""],
                   ["","",""]];
    let firstPlayer = createPlayer(firstName);
    let firstPlayerSymbol = "X";
    let secondPlayer = createPlayer(secondName);
    let secondPlayerSymbol = "O";
  
    return {};
  }

function createPlayer (name) {
    const Player = name;
    const getPoint = () => point;
    const givePoint = () => point++;
  
    return {Player,playerSymbol,playerScore};
  }