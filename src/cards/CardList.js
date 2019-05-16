import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

export default function CardList({cards, onToggleBookmark, onDelete}) {
    return (
        <ul>
        {cards.map(card => <Card key={card._id} title={card.title} description={card.description} tags={card.tags} bookmarked={card.bookmarked} onToggleBookmark={() => onToggleBookmark(card)} onDelete={() => onDelete(card)} />)}
        </ul>
    )
}

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    card: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        bookmarked: PropTypes.bool.isRequired
    }),
    onToggleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}