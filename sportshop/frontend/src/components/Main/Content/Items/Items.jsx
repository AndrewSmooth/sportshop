import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import s from "../Items/Items.module.css"
import Filters from "./Filters/Filters"


const Items = (props) => {

    let params = useParams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { props.getItems(params.tags) }, [])

    let itemsElements = props.items.map((e) => {

        return (
            <Link to={"/item/"+e.id} className={s.linkContainer}>
            <div className={s.itemContainer}>
                <img src={e.picture} className={s.item_img} alt="" />
                <div className={s.discrip}>
                    <div className={s.name}>{e.name} / </div>
                    <div className={s.produser}>{e.produser}</div>
                    <div className={s.price}>{e.price} руб</div>
                </div>
            </div>
            </Link>
        )
    })

    return(
        <dir className={s.wrapper_all}>


            <Filters typeOfSort={props.typeOfSort} chooseSort={props.chooseSort} setItems={props.getItems} tags={params.tags} />
            <div className={s.wrapper}>{itemsElements}</div>
            

        </dir>

    )
}

export default Items