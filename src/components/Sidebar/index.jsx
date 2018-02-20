import React, {Component} from 'react';
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import DashboardIcon from 'material-ui/svg-icons/action/dashboard'

export default class Sidebar extends Component {
	render() {
		return (
			<aside className="sidebar">
				<Menu>
					<MenuItem primaryText="Dashboard" leftIcon={<DashboardIcon />}/>
				</Menu>
			</aside>
		);
	}
}
