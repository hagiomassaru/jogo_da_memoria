const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";
let techs = [
    "bootstrap",
    "css3",
    "electron",
    "firebase",
    "html5",
    "jquery",
    "jss",
    "linuxmint",
    "mongodb",
    "nodedotjs",
];
let cards = null;
startGame();

function startGame() {
    cards = creatCardsFromTechs(techs);
    shuffleCards(cards);
    initializeCards(cards);
}

function initializeCards(card) {
    let gameBoard = document.getElementById("gameboard");

    cards.forEach((card) => {
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

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[randomIndex], cards[currentIndex]] = [
            cards[currentIndex],
            cards[randomIndex],
        ];
    }
}

creatCardsFromTechs(techs);
function creatCardsFromTechs(techs) {
    let card = [];
    techs.forEach((tech) => {
        card.push(creatCardsFromPair(tech));
    });
    return card.flatMap((pair) => pair);
}
function creatCardsFromPair(tech) {
    return [
        {
            id: createIdFromCards(tech),
            icon: tech,
            flipped: false,
        },
        {
            id: createIdFromCards(tech),
            icon: tech,
            flipped: false,
        },
    ];
}

function createIdFromCards(tech) {
    return tech + parseInt(Math.random() * 1000);
}

function flipcard() {
    this.classList.add("flip");
}
