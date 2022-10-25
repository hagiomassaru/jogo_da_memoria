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
creatCardsFromTechs(techs);
function creatCardsFromTechs(techs) {
    let card = [];
    for (let tech of techs) {
        card.push(creatCardsFromPair(tech));
    }
    return card.flatMap(pair=>pair);
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
