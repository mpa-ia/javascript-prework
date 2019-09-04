
function playGame (playerInput) {
    clearMessages();

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
    
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Coś poszło nie tak, spróbujmy jeszcze raz!');
        }
    }
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {playGame(1)});
document.getElementById('play-paper').addEventListener('click', function () {playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function () {playGame(3)});

