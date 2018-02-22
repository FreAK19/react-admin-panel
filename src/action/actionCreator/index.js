import {PENDING, FETCHING_FAILURE, FETCHING_SUCCESS} from '../index';

//	when request is pending
const fetching = () => ({
	type: PENDING,
	payload: {
		pending: true
	}
});

// 	response successful
const responseSuccess = (key = 'data', data) => ({
	type: FETCHING_SUCCESS,
	payload: {
		[key]: data,
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
const makeResponse = (key, url) => (dispatch, getState) => {
	const {loaded, pending} = getState()[key];

	//	if data is presenting return nothing
	if (loaded || pending) return null;

	//	show spinner
	dispatch(fetching());
	return window
		.fetch(url)
		.then(response =>
			response.json().then(data => {
				dispatch(responseSuccess(key, data));
			})
		)
		.catch(error => dispatch(responseFailure(error)));
};

export default makeResponse;
export {fetching, responseSuccess, responseFailure};
