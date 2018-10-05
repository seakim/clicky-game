import React, { Component, Fragment } from "react";
import list from "../cards.json";
import './App.css';

import CardList from "./cards/card_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  };

  componentWillMount() {
    let cardList = [];
    while (cardList.length < 8) {
      cardList.push(list[Math.floor(Math.random() * list.length)])
    }
    this.setState({
      cards: cardList
    });
  };

  removeCard = id => {
    this.state.cards.splice(id,1);
    const cards = this.state.cards
    cards.push(list[Math.floor(Math.random() * list.length)])

    this.setState({ cards });
  };

  render() {
    return (
      <Fragment>
        <h1 className="title">Clicky Game</h1>
        <CardList 
          removeCard = {this.removeCard}
          cards = {this.state.cards}
        />
    </Fragment>
    );
  }
}

export default App;
