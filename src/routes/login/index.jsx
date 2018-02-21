import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form';

class Login extends Component {
	handleSubmit = data => {
		console.log(data);
	};

	render() {
		return (
			<div className="flex-container full-width login">
				<Form action="login/auth.js" onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(Login);
