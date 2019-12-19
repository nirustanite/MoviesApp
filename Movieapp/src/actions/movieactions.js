import { url, api_key, language, page } from '../../constants'; // importing all the constants

// dispatching popular movies action
const popularMovies = (data) => {
    return{
        type: POPULAR_MOVIES,
        data
    }
}

//dispatching latestMovie action
const latestTv = (data) => {
    return{
        type: LATEST_TV,
        data
    }
}

//dispatching popular Tv
const popularTv = (data) => {
    return{
        type: POPULAR_TV,
        data
    }
}


// request to api for getting popular movies
export const loadPopularMovies = () => (dispatch) => {
    // the url with query parameters
    fetch(`${url}/movie/popular?api_key=${api_key}&language=${language}&page=${page}`)
     .then((response) => response.json())
     .then((jsonResponse) =>  {
         const action = popularMovies(jsonResponse);
         dispatch(action);
     })
     .catch((error) =>  {
         console.error(error)
     })
}

//get a latest Tv
export const getLatestTv = () => (dispatch) => {
    fetch(`${url}/tv/latest?api_key=${api_key}&language=${language}`)
    .then((response) =>  response.json())
    .then((jsonResponse) => {
        const action = latestTv(jsonResponse);
        dispatch(action);
    })
    .catch((error) => {
        console.error(error)
    })

}

//get popular tv
export const getPopularTV = () => (dispatch) => {
    fetch(`${url}/tv/popular?api_key=${api_key}&language=${language}&page=${page}`)
    .then((response) => response.json())
    .then((jsonResponse) => {
        const action = popularTv(jsonResponse);
        dispatch(action);
    })
    .catch((error) => {
        console.error(error)
    })
}


// exporting all the dispatched actions.
export const POPULAR_MOVIES =  'POPULAR_MOVIES';
export const LATEST_TV = 'LATEST_TV';
export const POPULAR_TV = 'POPULAR_TV';
export const SEARCH_RESULT = 'SEARCH_RESULT';