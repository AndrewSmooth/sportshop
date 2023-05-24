import s from "../Filters/Filters.module.css"


const Filters = (props) => {


    const onSortClick = (type) => {
        props.chooseSort(type)
        props.setItems(props.tags, type)
    }


    return (
        <div className={s.filters_container}>

            <div className={s.sort_by}>
                
                <div className={s.sort_name}>Сортировать по:</div>

                <div onClick={() => {onSortClick('default')}} className={(props.typeOfSort === 'default') ? s.sort_item_on : s.sort_item}>Стандарту</div>
                <div onClick={() => {onSortClick('priceMax')}}  className={(props.typeOfSort === 'priceMax') ? s.sort_item_on : s.sort_item}>Цене (убыванию)</div>
                <div onClick={() => {onSortClick('priceMin')}}  className={(props.typeOfSort === 'priceMin') ? s.sort_item_on : s.sort_item}>Цене (возрастанию)</div>
                <div onClick={() => {onSortClick('rating')}}  className={(props.typeOfSort === 'rating') ? s.sort_item_on : s.sort_item}>Рейтингу</div>
                

            </div>

        </div>
    )
}


export default Filters