class CommunityCards {
    constructor (firstCard, secondCard, thirdCard) {
        this.cards = [
            firstCard,
            secondCard,
            thirdCard,
            null,
            null
        ]
    }

    addTurn(card) {
        this.turn = card
    }

    addRiver(card) {
        this.river = card
    }
}