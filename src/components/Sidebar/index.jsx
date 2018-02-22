import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import UserIcon from 'material-ui/svg-icons/action/account-circle';
import './sidebar.less';

const style = {
	menu: {
		textAlign: 'left'
	}
};
export default class Sidebar extends Component {
	render() {
		return (
			<aside className="sidebar">
				<Menu width={100} style={style.menu}>
					<MenuItem primaryText="Dashboard" leftIcon={<DashboardIcon/>}/>
					<MenuItem primaryText="Restautant’s" leftIcon={<UserIcon/>}/>
					<MenuItem primaryText="Manage User’s" leftIcon={<DashboardIcon/>}/>
					<MenuItem primaryText="Manage Order’s" leftIcon={<DashboardIcon/>}/>
					<MenuItem primaryText="Manage Coupon’s" leftIcon={<DashboardIcon/>}/>
				</Menu>
			</aside>
		);
	}
}
