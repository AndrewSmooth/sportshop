import {NavLink} from "react-router-dom";

const Shoes = (props) => {
    
    let sections = props.sections.map((e) => {
        let path = Object.keys(e)[0]
        return (
            <NavLink to={path} className={props.itemIn}>{e[path]}</NavLink>
        )
    })

    return (
        <div className={props.containerIn}>
            {sections}
        </div>
    )
}

export default Shoes