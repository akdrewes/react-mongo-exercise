import React, { Component } from 'react'
import {getCards, postCard, setLocal, getLocal, patchCard, deleteCard} from '../services'
import CardPage from '../cards/CardPage'
import CreatePage from '../create/CreatePage'
import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class App extends Component {
  state = {
    cards: getLocal("cards") || []
  }

  componentDidMount() {
    getCards()
    .then(data => {
      this.setState({ cards: data })
      setLocal("cards", this.state.cards)
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    const {cards} = this.state;
    if (prevState.cards !== cards) {
      setLocal("cards", cards)
    }
  }

  handleCreateCard = ({title, description, tags}) => {
    const {cards} = this.state;
    postCard({title, description, tags})
    .then(card => this.setState({ cards: [card, ...cards] }))
    .catch(err => console.log(err))
}

  handleToggleBookmark = changedCard => {
    const {cards} = this.state;
    patchCard(!changedCard.bookmarked, changedCard._id)
    .then(changedCard => {
      const index = cards.findIndex(oldCard => oldCard._id === changedCard._id);
      this.setState({
        cards: [
          ...cards.slice(0, index),
          changedCard,
          ...cards.slice(index + 1)
        ]
      })
    })
    .catch(err => console.log(err))
  }

  handleDeleteCard = deletedCard => {
    const {cards} = this.state;
    deleteCard(deletedCard._id)
    .then(deletedCard => {
      const index = cards.findIndex(oldCard => oldCard._id === deletedCard._id);
      this.setState({
        cards: [...cards.slice(0, index), ...cards.slice(index + 1)]
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <Header />
          <h1>Cards</h1>
          <Switch>
            <Route path="/create" render={props => <CreatePage createCard={this.handleCreateCard} {...props} />} />
            <Route exact path="/" render={() => <CardPage cards={this.state.cards} onToggleBookmark={this.handleToggleBookmark} onDelete={this.handleDeleteCard} />} />
          </Switch>  
        </BrowserRouter>
      </main>
    )
  }
}
