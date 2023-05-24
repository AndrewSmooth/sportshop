import { connect } from "react-redux"
import { getItemThunk, setSizeCreator } from "../../../../store/oneItemReducer"
import OneItem from "./OneItem"


const mapStateToProps = (state) => {
    return {
        itemInfo: state.oneItemState
    } 
} 

const mapDispatchToProps = (dispath) => {
    return {
        getItemState: (id) => {dispath(getItemThunk(id))},
        setSize: (size) => {dispath(setSizeCreator(size))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneItem)