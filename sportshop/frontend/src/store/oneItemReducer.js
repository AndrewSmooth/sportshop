import { itemsAPI } from "../api/api"

const SET_ITEM_STATE = "SET_ITEM_STATE" 
const SET_SIZE = "SET_SIZE"

const initialState = {
    id: 26367,
    name: '',
    produser: '',
    price: 0,
    sizes: [],
    composition: [],
    discription: '',
    tags: [],
    pictures: [''],
    rating: 0,
    reviews: [
        {
            rating: 0,
            name: '',
            reviews: ''
        },
        {
            rating: 0,
            name: '',
            reviews: ''
        }
    ]
}

const oneItemReducer = (state = initialState, action) => {
    let copyState
    switch (action.type) {
        case SET_ITEM_STATE:
            
            copyState = action.state
            return copyState
    
        case SET_SIZE:

            copyState = {...state}
            debugger
            copyState.choosedSize = action.size
            return copyState

        default:
            return state
    }
}

export const setItemCreator = (state) => {
    return {
        type: SET_ITEM_STATE,
        state
    }
}

export const getItemThunk = (id) => (dispatch) => {
    itemsAPI.getItem(id)
    .then((state) => {
        
        dispatch(setItemCreator(state.data))
    })
} 

export const setSizeCreator = (size) => {
    return {
        type: SET_SIZE,
        size
    }
}

export default oneItemReducer