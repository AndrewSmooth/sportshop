import { useEffect } from "react"
import s from "../OneItem/OneItem.module.css"
import { useParams } from "react-router-dom";

const OneItem = (props) => {
    
    let params = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {props.getItemState(params.itemId)}, [])

    const onSizeClick = (e) => {
        props.setSize(e.currentTarget.innerText)
    }


    let sizeElements = props.itemInfo.sizes.map((e) => {
        
        let sizeClass
        if (props.itemInfo.choosedSize === e) {
            sizeClass = s.size_on
        } else {
            sizeClass = s.size
        }

        return(
            <div onClick={onSizeClick} className={sizeClass}>{e}</div>
        )
    })

    const onPictureClick = (e) => {
        
        let classPicture = e.currentTarget.className
        let element = document.querySelector(`.${s.main_picture}`)
        element.className = classPicture
        e.currentTarget.className = s.main_picture
    }

    let compositionElements = props.itemInfo.composition.map((e) => {
        return(
            
            <div>{e}</div>
        )
    })

    let counter = 0
    let pictureClass
    let pictures = props.itemInfo.pictures.map((e) => {
        if (counter === 0) {
            pictureClass = s.main_picture
        } else if (counter === 1) {
            pictureClass = s.first_picture
        } else if (counter === 2) {
            pictureClass = s.second_picture
        } else if (counter === 3) {
            pictureClass = s.fhird_picture
        }
        counter += 1
        return (
            <img src={e} alt="" onClick={onPictureClick} className={pictureClass} />
        )
    })

    let reviewsElements = props.itemInfo.reviews.map((e) => {
        return (
            <div className={s.review}>

                    <div className={s.review_flex}>

                        <div className={s.review_left}>

                            <div className={s.sender}>{e.name}</div>
                            <div className={s.raitng}>{e.rating} / 5</div>

                        </div>
                        
                        <div className={s.message}>{e.review}</div>

                    </div>
            </div>
        )
    })

    
    
    return (
        <div className="dsdsdsdsd">

            <div className={s.name}>{props.itemInfo.name} / {props.itemInfo.produser}
            <div className={s.all_rating}>{props.itemInfo.rating} / 5</div>
            </div>

            <div className={s.flex_container}>

                <div className={s.pictures_container}>

                    {pictures}

                </div>

                <div className={s.sizes_container}>

                    {sizeElements}

                </div>

                <div className={s.buy_area}>

                    <div className={s.buy}>
                        <div className={s.price}>{props.itemInfo.price} рублей</div>
                        <button className={s.buy_button}>Купить</button>
                        <button className={s.buy_button}>Добавить в корзину</button>
                    </div>

                    <div className={s.discription}>
                        <div>Описание:</div> 
                        <div>{props.itemInfo.discription}</div> 
                        <div>Состав:</div>
                        <div>{compositionElements}</div>
                    </div>

                </div>

            </div>

            <div className={s.otzivi}>Отзывы</div>

            <div>
                
                {reviewsElements}

            </div>
            
        </div>
    )
}

export default OneItem