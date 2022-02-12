class Deck {
    constructor() {
        this.cards = []
        this.buildDeck()
        this.shuffle()
    }

    suits() {
        return [
            'C', 'D', 'H', 'S'
        ]
    }

    values() {
        return [
            'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
        ]
    }

    buildDeck() {
        const deck = []

        for (value in this.values()) {
            for (suit in this.suits()) {
                deck.push(new Card(suit, value))
            }
        }

        this.cards = deck
    }

    shuffle() {
        const array  = this.cards.slice()

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }

        this.cards = array
    }

    dealCard() {
        return this.cards.shift()
    }

    dealFlop() {
        return [
            this.dealCard,
            this.dealCard,
            this.dealCard,
        ]
    }

    dealTurn() {
        return this.dealCard()
    }

    dealRiver() {
        return this.dealCard()
    }
}