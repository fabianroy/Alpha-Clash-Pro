function hideElementById(elelementId) {
    let element = document.getElementById(elelementId);
    element.classList.add('hidden');
}

function showElementById(elelementId) {
    let element = document.getElementById(elelementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elelementId){
    let element = document.getElementById(elelementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elelementId){
    let element = document.getElementById(elelementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet() {
    let alphabetsString = "abcdefghijklmnopqrstuvwxyz";
    let alphabets = alphabetsString.split('');

    // get a random index between 0 to 25
    let randomNumber = Math.random() * 25;
    let index = Math.round(randomNumber);
    let alphabet = alphabets[index];
    return alphabet;
}