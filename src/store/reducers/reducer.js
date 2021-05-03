const iniState = {}
let nominationList = JSON.parse(localStorage.getItem('nominationList'))

const moviesReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'GET MOVIES':
            return {
                ...state,
                moviesData: action.response.Search,
            }
        case 'GET MOVIES ERROR':
            return {
                ...state,
             }
        case 'ADD_TO_NOM_LIST':
            nominationList = nominationList ? nominationList : [];
            if (nominationList.length < 5 ){
                let newNominationList = [...nominationList]
                newNominationList.push(action.movieObj)
                localStorage.setItem('nominationList', JSON.stringify(newNominationList));
                return {
                    ...state,
                    addToListStatus: 'success',
                    timeAdded: new Date()
                }     
            }else{
                return {
                    ...state,
                    addToListStatus: 'error',
                    timeofError: new Date()
                } 
            }
        case 'REMOVE_FROM_NOM_LIST':
            let newNominationList = [...nominationList]
            newNominationList.splice(nominationList.findIndex(movie => movie.movieId !== action.movieId), 1);
            console.log(action.movieId);
            localStorage.setItem('nominationList', JSON.stringify(newNominationList));
            console.log('deleted!');
            return {
                ...state,
                timeRemoved: new Date()
            }
        default:
            return state;
    }
}

export default moviesReducer;