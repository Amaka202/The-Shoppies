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
                nominationList.push(action.payload)
                localStorage.setItem('nominationList', JSON.stringify(nominationList));
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
        default:
            return state;
    }
}

export default moviesReducer;