let computerWon = 0;
let playerWon = 0;
let roundNumber = 0;

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

document.getElementById('play-rock').addEventListener('click', function () {playGame(1)}, false);
document.getElementById('play-paper').addEventListener('click', function () {playGame(2)}, false);
document.getElementById('play-scissors').addEventListener('click', function () {playGame(3)}, false);

if (roundNumber >= 12) {

    document.getElementById('play-rock').removeEventListener('click', function () {playGame(1)}, false);
    document.getElementById('play-paper').removeEventListener('click', function () {playGame(2), false});
    document.getElementById('play-scissors').removeEventListener('click', function () {playGame(3)}, false);
    printMessage(computerWon + ":" + playerWon);

    if (playerWon>computerWon) {
        printMessage("Wygrałeś Grę");
    } else if (playerWon == computerWon){
        printMessage("Remis!");
    } else {
        printMessage("Przegrałeś grę!");
    }
    
} 

