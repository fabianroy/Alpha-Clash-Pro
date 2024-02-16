function continueGame(){
    // step 1 : Generate a random alphabet.
    let alphabet = getARandomAlphabet();
    let currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('playground-section');
    continueGame();
}

function handleKeyboardButtonPress(){
    console.log('Key pressed');
}

document.addEventListener('keyup', handleKeyboardButtonPress);