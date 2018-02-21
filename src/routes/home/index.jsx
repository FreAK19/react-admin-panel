//  @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import type { Cards } from '../flow-typed/api.js'
import makeResponse from '../../action/actionCreator/'
import Sidebar from '../../components/Sidebar'
import Spinner from '../../components/Spinner'
import Card from '../../components/Card'

type Props = {
	cards: Array<Cards>,
	showSpinner: boolean
}

export class Home extends Component<Props> {

	componentDidMount() {
		this.props.dispatch(makeResponse('http://localhost:8080/src/api/card_json.json'))
	}

	render() {
		const {cards, showSpinner} = this.props;
		return (
			<>
			<Sidebar/>
			<Spinner show={showSpinner} />
			<div className="dashboard__cards">
				{cards && cards.map(({title, count, id, color, icon}) => (
					<Card
						key={id}
						title={title}
						count={count}
						color={color}
						icon={icon}
					/>
				))
				}
			</div>
			</>
		);
	}
}

export default connect(state => ({
	cards: state.cards.cards,
	showSpinner: state.pending
}))(Home);
