const initialState = {
    genres: [],
    name: ''
}

export const musicalGenres = (state = initialState, action) => {
    
    switch(action.type){
        case "SET_GENRES":
            return{
                ...state,
                genres: action.payload.genresList
            }
        case "SET_GENRE_NAME":
            return{
                ...state,
                name: action.payload.name
            }
        default:
            return{
                ...state
            }
    }
}