function handleKeyboardButtonPress(event) {
    let playerPressed = event.key;

    // Stop the game if player press ESC
    if (playerPressed === 'Escape') {
        gameOver();
    }

    let currentAlphabetElement = document.getElementById('current-alphabet');
    let currentAlphabet = currentAlphabetElement.innerText;
    let exepectedAlphabet = currentAlphabet.toLowerCase();


    if (playerPressed === exepectedAlphabet) {
        console.log('Player pressed the correct alphabet', playerPressed);

        //update score
        let currentScore = getTextElementValueById('current-score');
        let updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        removeBackgroundColorById(exepectedAlphabet);
        continueGame();
    } else {
        console.log('Player pressed the wrong alphabet', playerPressed);
        //Remove Life
        let currentLife = getTextElementValueById('current-life');
        let updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            // Game Over
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // step 1 : Generate a random alphabet.
    let alphabet = getARandomAlphabet();
    let currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('game-over-section');
    showElementById('playground-section');
    setTextElementValueById('current-score', 0);
    setTextElementValueById('current-life', 3);
    continueGame();
}

function gameOver(){
    hideElementById('playground-section');
    showElementById('game-over-section');
    
    // Update final score
    let finalScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', finalScore);

    // Clear the last selected alphabet highlight
    let currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}