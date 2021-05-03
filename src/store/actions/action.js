import env from "react-dotenv";
const apiKey = env.API_KEY


export const getMovies = (searchWord) => {
    return (dispatch, getState) => {
        console.log(env.API_KEY);
        fetch(`http://www.omdbapi.com/?s=${searchWord}&page=5&type=movie&apikey=${apiKey}`)
            .then((data) => {
                return data.json()
            })
            .then((response) => {
                console.log(response);
                dispatch({
                     type: 'GET MOVIES',
                    getEntriesSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'GET MOVIES ERROR',
                    getEntriesErrorTime: new Date(),
                    error
                })
            })
    }
}

export const addMovieToNomList = (movieObj) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_NOM_LIST',
            movieObj
        })
    }
}

export const removeMovieFromNomList = (movieId) => {
    console.log(movieId);
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_NOM_LIST',
            movieId
        })
    }
}