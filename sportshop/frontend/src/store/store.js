import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMW from "redux-thunk"
import itemsReduser from "./itemsReduser"
import oneItemReducer from "./oneItemReducer"
import filtresReduser from "./filtresReducer"

let reducers = combineReducers({
    itemsState: itemsReduser,
    oneItemState: oneItemReducer,
    filtersState: filtresReduser
})

let store = createStore(reducers, applyMiddleware(thunkMW))

window.store = store

export default store