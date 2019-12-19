//stores the data of Latest Tv

import { LATEST_TV } from '../actions/movieactions';

export default (state = {}, action) => {
    switch (action.type) {
      case LATEST_TV:
        return action.data;
      default:
        return state;
    }
};