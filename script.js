const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";


startGame();

function startGame() {
       
    initializeCards(game.creatCardsFromTechs());
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameboard");

    game.cards.forEach((card) => {
        let cardElement = document.createElement(`div`);
        cardElement.id = card.id;
        cardElement.classList.add(CARD);

        creatCardContent(card, cardElement);
        cardElement.addEventListener("click", flipcard);

        gameBoard.appendChild(cardElement);
    });
}

function creatCardContent(card, cardElement) {
    creatCardContentFace(FRONT, card, cardElement);
    creatCardContentFace(BACK, card, cardElement);
}

function creatCardContentFace(face, card, element) {
    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face);
    if (face === FRONT) {
        let imageElement = document.createElement("img");
        imageElement.classList.add(ICON);
        imageElement.src = `./assets/image/` + card.icon + ".svg";
        cardElementFace.appendChild(imageElement);
    } else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}





function flipcard() {
    this.classList.add("flip");
}
