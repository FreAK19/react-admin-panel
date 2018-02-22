import {PENDING, FETCHING_SUCCESS, FETCHING_FAILURE} from '../../action/index';

const INITISL_STATE = {
	user: null,
	loaded: false,
	error: false
};

const loginReducer = (state = INITISL_STATE, action) => {
	switch (action.type) {
		case PENDING:
		case FETCHING_FAILURE:
		case FETCHING_SUCCESS:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

export default loginReducer;
