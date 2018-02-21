import React from 'react';
import './card.less'

type Props = {
	count: number,
	title: string,
	icon: string,
	color: string
}

const Card = (props: Props) => (
	<div className="card" style={{backgroundColor: `${props.color}`}}>

		<i
			className="card__icon"
			style={{background: `url(${props.icon}) no-repeat center`}}
		/>
		<p className="card__count">{props.count}</p>
		<p>{props.title}</p>
	</div>
);

export default Card;
