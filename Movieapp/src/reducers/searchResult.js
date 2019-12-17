import {SEARCH_RESULT} from '../actions/movieactions';

export default (state = [], action) => {
    switch (action.type) {
      case SEARCH_RESULT:
        return action.data;
      default:
        return state;
    }
};