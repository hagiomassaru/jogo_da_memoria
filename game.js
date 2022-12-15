let game = {
    lockMode: false,
    firstCard: null,
    secondCard: null,
    setCards: function () {
        this.cards.filter((card) => card.id === id)[0];
        if (card.flipped || this.lockMode) {
            return false;
        }
        if (!this.firstCard) {
            this.firstCard = card;
            return true;
        }
    },

    techs: [
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
    ],
    cards: null,
    creatCardsFromTechs: function () {
        this.card = [];
        this.techs.forEach((tech) => {
            this.card.push(this.creatCardsFromPair(tech));
        });
        this.cards = this.card.flatMap((pair) => pair);
        this.shuffleCards();
        return this.cards;
    },
    creatCardsFromPair: function (tech) {
        return [
            {
                id: this.createIdFromCards(tech),
                icon: tech,
                flipped: false,
            },
            {
                id: this.createIdFromCards(tech),
                icon: tech,
                flipped: false,
            },
        ];
    },

    createIdFromCards: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },
    shuffleCards: function () {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[randomIndex], this.cards[currentIndex]] = [
                this.cards[currentIndex],
                this.cards[randomIndex],
            ];
        }
    },
};
