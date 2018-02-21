import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom'
import './form.less';

type Props = {
	action: string,
	onSubmit: Function
};

type State = {
	firstName: string,
	password: string,
	remember: string | boolean,
	disable: boolean
};

export default class Form extends Component<Props, State> {
	state = {
		firstName: '',
		password: '',
		remember: false
	};

	handleChange = ({ target }) => {
		//	if name firstName then change firstName, or password
		this.setState({
			[target.name]: target.value
		});
	};

	handleSignInClick = () => {
		this.props.onSubmit(this.state);
		this.setState({
			firstName: '',
			password: ''
		});
	};

	render() {
		const { action } = this.props;
		return (
			<Paper zDepth={3}>
				<form action={action} method="post" className="form">
					<label htmlFor="firstName" className="form__label--hidden">
						FirstName
					</label>
					<TextField
						name="firstName"
						type="text"
						fullWidth
						onChange={this.handleChange}
						id="firstName"
						floatingLabelText="First Name"
					/>
					<label htmlFor="psw" className="form__label--hidden">
						Password
					</label>
					<TextField
						type="password"
						name="password"
						id="psw"
						fullWidth
						onChange={this.handleChange}
						floatingLabelText="Password"
						style={{
							marginBottom: '0.5rem'
						}}
					/>
					<Checkbox
						defaultChecked
						name="remember"
						label="Remember me"
						labelPosition="right"
						onCheck={this.handleChange}
						style={{
							marginBottom: '0.5rem'
						}}
					/>
					<RaisedButton label="Sign in" onClick={this.handleSignInClick} primary fullWidth />
					<Link to="forgot/" className="form__link">Forgot password?</Link>
				</form>
			</Paper>
		);
	}
}
