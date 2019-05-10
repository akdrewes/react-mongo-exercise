import React, { Component } from 'react'
import {getCards} from './services'
import CardList from './components/CardList'
import Form from './components/Form'

export default class App extends Component {
  state = {
    cards: [],
  }

  componentDidMount() {
    getCards()
    .then(data => this.setState({ cards: data }))
    .catch(error => console.log(error))
  }

  render() {

    return (
      <main>
        <h1>Cards</h1>
        <Form />
        <CardList cards={this.state.cards} />
      </main>
    )
  }
}
