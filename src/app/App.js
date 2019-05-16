import React, { useState, useEffect } from 'react'
import {getCards, postCard, setLocal, getLocal, patchCard, deleteCard} from '../services'
import CardPage from '../cards/CardPage'
import CreatePage from '../create/CreatePage'
import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
  const [cards, setCards] = useState(getLocal('cards') || [])

  useEffect(() => {
    getCards()
    .then(data => setCards(data))
    .catch(err => console.log(err))}, [])

    useEffect(() => {
      setLocal('cards', cards)
    }, [cards])

  const handleCreateCard = ({title, description, tags}) => {
    postCard({title, description, tags})
    .then(card => setCards([card, ...cards]))
    .catch(err => console.log(err))
}

  const handleToggleBookmark = changedCard => {
    patchCard(!changedCard.bookmarked, changedCard._id)
    .then(changedCard => {
      const index = cards.findIndex(oldCard => oldCard._id === changedCard._id);
      setCards([
          ...cards.slice(0, index),
          changedCard,
          ...cards.slice(index + 1)
        ])
    })
    .catch(err => console.log(err))
  }

  const handleDeleteCard = deletedCard => {
    deleteCard(deletedCard._id)
    .then(deletedCard => {
      const index = cards.findIndex(oldCard => oldCard._id === deletedCard._id);
      setCards([...cards.slice(0, index), ...cards.slice(index + 1)])
    })
    .catch(err => console.log(err))
  }

  return (
    <main>
      <BrowserRouter>
        <Header />
        <h1>Cards</h1>
        <Switch>
          <Route path="/create" render={props => <CreatePage createCard={handleCreateCard} {...props} />} />
          <Route exact path="/" render={() => <CardPage cards={cards} onToggleBookmark={handleToggleBookmark} onDelete={handleDeleteCard} />} />
        </Switch>  
      </BrowserRouter>
    </main>
  )
}
