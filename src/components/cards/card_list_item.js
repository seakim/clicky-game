import React, { Component } from 'react';

class CardListItem extends Component {

	onCardSelect() {
		// if (this.props.selectedCards.includes(this.props.card.id)) {
		// 	alert(`You already have selected ${this.props.card.name}.  Your score is ${this.props.selectedCards.length}`);
		// 	this.props.selectedCards = [];
		// 	console.log("New Count", this.props.selectedCards);
		// }
		this.props.selectedCards.push(this.props.card.id);
		this.props.removeCard( parseInt(this._reactInternalFiber.key) );
	}

	render() {
		return (
			<li className="card col 3">
				<div className="img-container"
					onClick={ () => this.onCardSelect() }>
					<img src={this.props.card.image} alt={this.props.card.name} />
				</div>
			</li>
		)
	}
}

export default CardListItem;