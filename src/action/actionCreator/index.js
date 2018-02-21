import {
	PENDING,
	FETCHING_FAILURE,
	FETCHING_SUCCESS} from '../index'

//	when request is pending
const fetching = () => ({
	type: PENDING,
	payload: {
		pending: true
	}
});

// 	response successful
const responseSuccess = data => ({
	type: FETCHING_SUCCESS,
	payload: {
		cards: data,
		error: false,
		loaded: true,
		pending: false
	}
});

//	response fail
const responseFailure = error => ({
	type: FETCHING_FAILURE,
	payload: {
		error,
		pending: false
	}
});

//	make request
const makeResponse = url => (dispatch, getState) => {
	const { loaded, pending } = getState().cards;

	//	if data is presenting return nothing
	if (loaded || pending) return null;

	//	show spinner
	dispatch(fetching());
	return window.fetch(url)
		.then(response => response.json()
			.then(data => {
				dispatch(responseSuccess(data))
			})).catch(error => dispatch(responseFailure(error)))
};

export default makeResponse;

