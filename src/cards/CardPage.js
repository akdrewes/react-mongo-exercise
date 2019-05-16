import React from 'react'
import CardList from './CardList'

export default function CardPage({cards, onToggleBookmark, onDelete}) {
    return (
        <CardList cards={cards} onToggleBookmark={onToggleBookmark} onDelete={onDelete} />
    )
}