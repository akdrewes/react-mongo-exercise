import React, { Component } from 'react'
import {getCards, postCard} from './services'
import CardList from './components/CardList'
import Form from './components/Form'

export default class App extends Component {
  state = {
    cards: [],

  }

  componentDidMount() {
    getCards()
    .then(data => this.setState({ cards: data }))
    .catch(err => console.log(err))
  }

  handleCreate = ({title, description, tags}) => {
    const {cards} = this.state;
    postCard({title, description, tags})
    .then(card => this.setState({ cards: [card, ...cards] })
    )
    .catch(err => console.log(err))
}

  render() {
    return (
      <main>
        <h1>Cards</h1>
        <Form onCreate={this.handleCreate} />
        <CardList cards={this.state.cards} />
      </main>
    )
  }
}
