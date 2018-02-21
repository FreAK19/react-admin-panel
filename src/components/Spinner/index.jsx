import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';
import './spinner.less'

const Spinner = ({show}) =>
	show ? (
		<div className="spinner">
			<div className="spinner__box">
				<CircularProgress size={60} />
			</div>
		</div>
	) : null;

Spinner.propTypes = {
	show: PropTypes.bool.isRequired
};

export default Spinner;
