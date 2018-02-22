// @flow
import {combineReducers} from 'redux';
import cardsReducer from '../routes/home/cards';
import loginReducer from '../routes/login/reducer';

export default combineReducers({
	cards: cardsReducer,
	login: loginReducer
});
