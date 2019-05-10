import React from 'react'
import Card from './Card'

function CardList({cards}) {
    return (
        <ul>
        {cards.map(card => <Card key={card._id} title={card.title} description={card.description} tags={card.tags} />)}
    </ul>
    )
}

export default CardList