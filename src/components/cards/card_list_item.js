import React, { Component } from 'react';

class CardListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}
	
	handleIncrement() {
		this.setState({ count: this.state.count + 1 });
		console.log(this.state.count)
	}

	render() {
		return (
			<li className="card col 3">
				<div className="img-container"
					onClick={() => {
						this.props.removeCard( parseInt(this._reactInternalFiber.key) );
					}}>
					<img src={this.props.card.image} alt={this.props.card.name} />
				</div>
			</li>
		)
	}
}

export default CardListItem;