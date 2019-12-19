//stores the data of popular movies

import { POPULAR_MOVIES } from '../actions/movieactions';

export default (state = [], action) => {
    switch (action.type) {
      case POPULAR_MOVIES:
        return action.data;
      default:
        return state;
    }
};