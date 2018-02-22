import React from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import {func} from 'prop-types';
import Form from '../../components/Form';
import {post} from '../../action/actionCreator/login';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	handleSubmit: user => dispatch(post('user', 'http://localhost:8080/auth.js', user))
});

const style = {
	tab: {
		color: '#b5b3b2',
		fontWeight: 'bold',
		backgroundColor: 'rgb(242, 242, 242)'
	}
};

const Login = ({handleSubmit}) => (
	<div className="flex-container full-width login">
		<Tabs>
			<Tab className="active" label="Sign In" style={style.tab}>
				<Form action="login/auth.js" onSubmit={handleSubmit}/>
			</Tab>
			<Tab label="Register" style={style.tab}>
				<Form action="login/auth.js" onSubmit={handleSubmit}/>
			</Tab>
		</Tabs>
	</div>
);

Login.propTypes = {handleSubmit: func.isRequired};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
