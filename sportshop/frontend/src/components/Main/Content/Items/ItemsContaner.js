import { connect } from "react-redux"
import { setItemsStateThunk } from "../../../../store/itemsReduser"
import Items from "./Items"
import { chooseSortCreator } from "../../../../store/filtresReducer"



const mapStateToProps = (state) => {
    return {
        items: state.itemsState,
        typeOfSort: state.filtersState.typeOfSort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: (tags, typeOfSort) => {dispatch(setItemsStateThunk(tags, typeOfSort))},
        chooseSort: (type) => {dispatch(chooseSortCreator(type))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)