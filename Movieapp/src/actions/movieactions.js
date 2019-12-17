import {url,api_key,language,page} from '../../constants';

// dispatching popular movies action
const popularMovies = (data) => {
    console.log('popular movies', data)
    return{
        type: POPULAR_MOVIES,
        data
    }
}

//dispatching latestMovie action
const latestMovie = (data) => {
    return{
        type: LATEST_MOVIE,
        data
    }
}

// request to api for getting popular movies
export const loadPopularMovies = () => (dispatch) => {
    // the url with query parameters
    fetch(`${url}/movie/popular?api_key=${api_key}&language=${language}&page=${page}`)
     .then((response) => response.json())
     .then((jsonResponse) =>  {
         console.log("data from movies ",jsonResponse)
         const action = popularMovies(jsonResponse);
         dispatch(action);
     })
     .catch((error) =>  {
         console.error(error)
     })
}

//get a lastest movie
export const getLatestMovie = () => (dispatch) => {
    fetch(`${url}/movie/latest?api_key=${api_key}&language=${language}`)
    .then((response) =>  response.json())
    .then((jsonResponse) => {
        console.log("latestMovies",jsonResponse)
        const action = latestMovie(jsonResponse);
        dispatch(action);
    })

}


export const POPULAR_MOVIES =  'POPULAR_MOVIES';
export const LATEST_MOVIE = 'LATEST_MOVIE';