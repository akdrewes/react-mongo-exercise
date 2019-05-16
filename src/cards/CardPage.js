import React from 'react'
import PropTypes from 'prop-types'
import CardList from './CardList'

export default function CardPage({cards, onToggleBookmark, onDelete}) {
    return (
        <CardList cards={cards} onToggleBookmark={onToggleBookmark} onDelete={onDelete} />
    )
}

CardPage.propTypes = {
    cards: PropTypes.array.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}