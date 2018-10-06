import React from 'react';
import CardListItem from './card_list_item';
import './card.css';

const CardList = (props) => {
	const CardItems = props.cards.map( (card, index) => {
		return (
			<CardListItem 
				removeCard = {props.removeCard}
				key = {index}
				card = {card}
				selectedCards = {props.selectedCards}
			/>
		)
	})

	return (
		<div className="container">
			<ul className="row">{CardItems}</ul>
		</div>
	)
}

export default CardList;