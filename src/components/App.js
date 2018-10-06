import React, { Component, Fragment } from "react";
import list from "../cards.json";
import CardList from "./cards/card_list";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      selectedCards: [],
      topScore: 0
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

    let uniq = arr => Array.from(new Set(arr));
    // same as above
    // let uniq = arr => [...new Set(arr)];
    console.log(this.state.selectedCards)
    console.log(uniq(this.state.selectedCards))

    if (this.state.selectedCards.length !== uniq(this.state.selectedCards).length) {
      alert(`Your score is ${uniq(this.state.selectedCards).length}`)
      //set card state back to empty
      const getTopScore = () => {
        if (this.state.topScore < uniq(this.state.selectedCards).length) {
          return uniq(this.state.selectedCards).length;
        } else {
          return this.state.topScore;
        }
      }
      this.setState({ 
        topScore: getTopScore(),
        selectedCards: []
      });
    }
  };

  render() {
    return (
      <Fragment>
        <h1 className="title">Clicky Game</h1>
        <CardList 
          removeCard = {this.removeCard}
          selectedCards = {this.state.selectedCards}
          cards = {this.state.cards}
        />
        <h4 className="score">Score: {this.state.selectedCards.length} | Top Score: {this.state.topScore}</h4>
    </Fragment>
    );
  }
}

export default App;
