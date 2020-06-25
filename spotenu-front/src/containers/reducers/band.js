const initialState = {
    bands: [],
    id: ''
}

export const allBands = (state = initialState, action) => {
    switch(action.type){
        case "SET_BANDS":
            return{
                ...state,
                bands: action.payload.bandList
            }
        case "SET_ID_BAND":
            return{
                ...state,
                id: action.payload.id
            }
        default:
            return{
                ...state
            }
    }
}