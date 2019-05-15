import React from 'react'
import Card from './Card'

export default function CardList({cards, onToggleBookmark}) {
    return (
        <ul>
        {cards.map(card => <Card key={card._id} title={card.title} description={card.description} tags={card.tags} bookmarked={card.bookmarked} onToggleBookmark={() => onToggleBookmark(card)} />)}
        </ul>
    )
}