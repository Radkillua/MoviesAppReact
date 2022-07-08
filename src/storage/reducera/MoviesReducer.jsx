const INITIAL_STATE={
    moviesList: [],
    moviesDetails:{}
}

export default function movieListReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "GET-MOVIES-LIST" :
            return {...state, moviesList:action.payload}

        case "GET-MOVIES-DETAILS" :
            return {...state, moviesDetails:action.payload}    
            default :
            return state
    }
}