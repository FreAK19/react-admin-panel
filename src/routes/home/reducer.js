import { INITIAL } from '../../action';

const INITIAL_STATE = {
  caption: 'Start Coding Now'
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIAL:
      return {
        ...state,
        caption: action.caption
      };
    default:
      return state;
  }
};
