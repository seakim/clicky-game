import React, { Component, Fragment } from "react";
import cards from "../cards.json";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      selectedCard: null
    }
    console.log(cards);
  }

  render() {
    return (
      <Fragment>
        <h1 className="title">Clicky Game</h1>
    </Fragment>
    );
  }
}

export default App;
