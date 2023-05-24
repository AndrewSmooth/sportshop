const CHOOSE_SORT = 'CHOOSE_SORT'


const initialState = {
    typeOfSort: 'default'
}

const filtresReduser = (state = initialState, action) => {
    let copyState
    
    switch (action.type) {
        case CHOOSE_SORT:
            
            copyState = {}
            copyState.typeOfSort = action.typeOfSort
            return copyState;
    
        default:
            return state;
    }
}

export const chooseSortCreator = (typeOfSort) => {
    return {
        type: CHOOSE_SORT,
        typeOfSort
    }
}

export const chooseSortThunk = (typeOfSort) => (dispatch) => {

}


export default filtresReduser