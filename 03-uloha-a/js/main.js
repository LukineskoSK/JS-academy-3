// Premenna ktorá má v sebe zoznam Card
let cardsContainer = document.querySelector('.cards ul');

// Funkcia na vytvorenie novej karty
function createNewCard(title, content){
    let newCard = document.createElement('li');
    newCard.className = "animate__animated animate__fadeInDown"
    newCard.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</h3>
    `;

    cardsContainer.appendChild(newCard);
};
// Po kliknutí na buttton sa spusti funkcia na pridanie karty
document.getElementById('createButton').addEventListener('click', function(event) {
    event.preventDefault(); // Aby sa stránka po kliknutí neresetovala

    let heading = document.getElementById('heading').value;
    let message = document.getElementById('message').value;

    createNewCard(heading,message);

    document.getElementById('heading').value = '';
    document.getElementById('message').value = '';
});

// ------------------
// ----HLAVNY KOD----
// ------------------


