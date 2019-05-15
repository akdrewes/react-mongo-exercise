import React, { Component } from 'react'
import {getCards, postCard, setLocal, getLocal, patchCard} from './services'
import CardList from './components/CardList'
import Form from './components/Form'

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

  handleCreate = ({title, description, tags}) => {
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

  render() {
    return (
      <main>
        <h1>Cards</h1>
        <Form onCreate={this.handleCreate} />
        <CardList cards={this.state.cards} onToggleBookmark={this.handleToggleBookmark} />
      </main>
    )
  }
}
