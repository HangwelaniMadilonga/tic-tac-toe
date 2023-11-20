function createBoard (firstName,secondName){
    let gameBoard=[["","",""],
                   ["","",""],
                   ["","",""]];
    let firstPlayer = createPlayer(firstName,"X");
    let secondPlayer = createPlayer(secondName,"O");
   
    function initialiseBoard(){
        gameBoard.forEach((cell) => {
            
        });
    };
  }

function createPlayer (name,playerSymbol){
    const playerSymbol = playerSymbol;
    let point = 0;
    const getPoint = () => point;
    const givePoint = () => point++;
  
    return {name,playerSymbol,getPoint,givePoint};
  };
  
