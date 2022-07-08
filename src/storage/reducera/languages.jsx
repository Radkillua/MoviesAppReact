const INITIAL_STATE={
    currentLanguage:"en",
    languages:['ar' , 'en' ,"fr"]
}

export default function languageReducer(state = INITIAL_STATE, action ){
    switch (action.type){
        case "SET-LANGUAGE" :
            return {
                ...state,
                currentLanguage:action.payload

            }
        
        case "UPDATE-AVAILABLE-LANGUAGE" :
        return {
            ...state,
            languages:action.payload

        }
        default :
        return state
    }
}