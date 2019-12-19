// stores the data of popular Tv

import { POPULAR_TV } from '../actions/movieactions';

export default (state = [], action) => {
    switch (action.type) {
      case POPULAR_TV:
        return action.data;
      default:
        return state;
    }
};