import { itemsAPI } from "../api/api"


const SET_STATE = "SET_STATE"

const initalState = []

const itemsReduser = (state = initalState, action) => {
    let copyState
    switch (action.type) {
        case SET_STATE:
            
            copyState = action.state
            return copyState
        default:
            return state
    }
}


export const setItemsStateCreator = (state) => {
    return ({
        type: SET_STATE,
        state
    })
}


export const setItemsStateThunk = (tags, typeOfSort = "default") => (dispatch) => {
    itemsAPI.getItems(tags, typeOfSort).then((state) => {
        dispatch(setItemsStateCreator(state.data))
    })
}


export default itemsReduser