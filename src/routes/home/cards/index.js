import {
	PENDING,
	FETCHING_FAILURE,
	FETCHING_SUCCESS
} from "../../../action/index";

const INITIAL_STATE = {
	cards: [],
	loaded: false,
	pending: false,
	error: false
};

const cardsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PENDING:
		case FETCHING_FAILURE:
		case FETCHING_SUCCESS:
			return {
				...state,
				...action.payload
			};
		default:
			return state
	}
};
export default cardsReducer;
