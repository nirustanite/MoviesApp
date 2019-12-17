import {LATEST_MOVIE} from '../actions/movieactions';

export default (state = {}, action) => {
    switch (action.type) {
      case LATEST_MOVIE:
        return action.data;
      default:
        return state;
    }
};