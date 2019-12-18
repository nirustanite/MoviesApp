import {url,api_key,language,page} from '../../constants';

// dispatching popular movies action
const popularMovies = (data) => {
    //console.log('popular movies', data)
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

const popularTv = (data) => {
    return{
        type: POPULAR_TV,
        data
    }
}


const getSearchedResult = (data) => {
    //console.log("searched result", data)
    return{
        type: SEARCH_RESULT,
        data
    }
}

// request to api for getting popular movies
export const loadPopularMovies = () => (dispatch) => {
    // the url with query parameters
    fetch(`${url}/movie/popular?api_key=${api_key}&language=${language}&page=${page}`)
     .then((response) => response.json())
     .then((jsonResponse) =>  {
         //console.log("data from movies ",jsonResponse)
         const action = popularMovies(jsonResponse);
         dispatch(action);
     })
     .catch((error) =>  {
         console.error(error)
     })
}

//get a lastest movie
export const getLatestMovie = () => (dispatch) => {
    fetch(`${url}/tv/latest?api_key=${api_key}&language=${language}`)
    .then((response) =>  response.json())
    .then((jsonResponse) => {
        const action = latestMovie(jsonResponse);
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


export const searchMulti = (searchText) => (dispatch) => {
    
    console.log("Search Text",searchText);
    fetch(`${url}/search/multi?api_key=${api_key}&language=${language}&query=${searchText}&page=${page}&include_adult=false`)
    .then((response) => response.json())
    .then((jsonResponse) => {
        const action = getSearchedResult(jsonResponse);
        dispatch(action);
    })
    .catch((error) => {
        console.error(error)
    })
}

export const POPULAR_MOVIES =  'POPULAR_MOVIES';
export const LATEST_MOVIE = 'LATEST_MOVIE';
export const POPULAR_TV = 'POPULAR_TV';
export const SEARCH_RESULT = 'SEARCH_RESULT';