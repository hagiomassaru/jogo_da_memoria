const FROM = "card_from";
const BACK = "card_back";

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
    console.log(cards)
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
    for (let tech of techs) {
        card.push(creatCardsFromPair(tech));
    }
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
