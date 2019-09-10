let computerWon = 0, 
    playerWon = 0, 
    roundNumber = 0;

function playGame (playerInput) {
    clearMessages();

    roundNumber++;
   
    function getMoveName (argNumber) {
        if(argNumber == '1'){
            return 'kamień';
          } else if (argNumber == '2') {
            return 'papier';
          } else if (argNumber == '3') {
            return 'nożyce';
          }
          return 'Nieznany ruch';
    }
    
    function displayResult (argComputerMove, argPlayerMove) {
        console.log('Argumenty funkcji: ', argComputerMove, argPlayerMove);
    
        if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        }
        else if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz rundę!');
            playerWon++;
        } else {
            printMessage('Przegrywasz rundę!');
            computerWon++;
        }
    }
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
        
    let computerMove = getMoveName(randomNumber);
    printMessage(computerMove);
    
    let playerMove = getMoveName(playerInput); 
    printMessage(playerMove);
    
    printMessage("Runda: " + roundNumber);
    console.log('Runda: ' + roundNumber);

    displayResult(computerMove, playerMove);
    printMessage(computerWon + ":" + playerWon);
    
}

function newGame () {
    clearMessages();
    computerWon = 0;
    playerWon = 0;
    roundNumber = 0;
}

document.getElementById('new-game').addEventListener('click', function () {newGame()});

document.getElementById('play-rock').addEventListener('click', function () {playGame(1)});
document.getElementById('play-paper').addEventListener('click', function() {playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function () {playGame(3)});

if (roundNumber >= 12) {

    document.getElementById('play-rock').removeEventListener('click', playGame(1));
    document.getElementById('play-paper').removeEventListener('click', playGame(2));
    document.getElementById('play-scissors').removeEventListener('click', playGame(3));
    printMessage(computerWon + ":" + playerWon);

    if (playerWon>computerWon) {
        printMessage("Wygrałeś Grę");
    } else if (playerWon == computerWon){
        printMessage("Remis!");
    } else {
        printMessage("Przegrałeś grę!");
    }
    
} 

