import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RegisterIcon from 'material-ui/svg-icons/action/perm-identity';

type;
Props = {
	action: string,
	onSubmit: Function
};

type;
State = {
	firstName: string,
	lastName: string,
	password: string,
	email: string,
	age: '',

};

export default class Form extends Component<Props, State> {
	state = {
		firstName: '',
		password: '',
		remember: false
	};

	handleChange = ({target}) => {
		//	if name firstName then change firstName, or password
		this.setState({
			[target.name]: target.value
		});
	};

	handleSignUpClick = () => {
		this.props.onSubmit(this.state);
		this.setState({
			firstName: '',
			password: ''
		});
	};

	render() {
		const {action} = this.props;
		return (
			<Paper zDepth={3}>
				<form action={action} method="post" className="form form--register">
					<div className="form__caption form__caption--register">
						<RegisterIcon/>
						<p>Register</p>
					</div>

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

					<label htmlFor="lastName" className="form__label--hidden">
						LastName
					</label>
					<TextField
						name="text"
						type="lastName"
						fullWidth
						onChange={this.handleChange}
						id="lastName"
						floatingLabelText="Last Name"
					/>

					<label htmlFor="user-email" className="form__label--hidden">
						Email
					</label>
					<TextField
						name="email"
						type="email"
						fullWidth
						onChange={this.handleChange}
						id="user-email"
						floatingLabelText="Email address"
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
					/>

					<RadioButtonGroup
						onChange={this.handleChange}
						name="gender"
						defaultSelected="male"
						className="form__radio-group"
					>
						<RadioButton
							value="female"
							label="Female"
						/>
						<RadioButton
							value="male"
							label="Male"
						/>
					</RadioButtonGroup>
					<RaisedButton label="Register" onClick={this.handleSignUpClick} primary fullWidth/>
				</form>
			</Paper>
		);
	}
}
