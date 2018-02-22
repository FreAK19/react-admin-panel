import {CONTENT_TYPE_JSON} from '../index';
import {fetching, responseSuccess, responseFailure} from './index';

const POST_CONFIG = {method: 'POST', headers: {'Content-Type': CONTENT_TYPE_JSON}};
const post = (key, url: string, body: Object) => (dispatch, getState) => {
	//const { loaded, pending } = getState()[key];

	//	if data is presenting return nothing
	//if (loaded || pending) return null;

	dispatch(fetching());
	return fetch(url, {
		...POST_CONFIG,
		body: JSON.stringify(body)
	})
		.then(response => dispatch(responseSuccess(key, response.json())))
		.catch(error => responseFailure(error));
};

export {post};
