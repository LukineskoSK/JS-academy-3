document.addEventListener('click', function(event){
    // do dudeElement sa odchyti div na ktorý som klikol
    let dudeElement = event.target.closest('.dude');
    // Ak som klikol na div s class dude pripocitam 1 ku score
    if (dudeElement) {
        let scoreElement = dudeElement.querySelector('.score');
        
        let currentScore = parseInt(scoreElement.textContent);
        scoreElement.textContent = currentScore + 1;
    }
})