import { useEffect, useState } from 'react'
import classConnect from '../../../utils/classConnect'
import s from './Mainpage.module.css'
import b from '../../../images/pngwing.com.png'
import { NavLink, redirect, useNavigate } from 'react-router-dom'

const Mainpage = () => {

    let [slide, slideOn] = useState(1)

    const slideEventRight = () => {
        if (slide <= 3) {
            slideOn(slide + 1)
        }   
    }

    let [rightLeftSlide, rightLeftSlideOn] = useState(true)

    const autoSlide = () => {
        if (rightLeftSlide) {
            slideEventRight()
            if (slide === 4) {
                rightLeftSlideOn(false)
            }
        } else {
            slideEventLeft()
            if (slide === 1) {
                rightLeftSlideOn(true)
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(autoSlide, 5000);
        return () => clearInterval(interval);
      });

    const slideEventLeft = () => {
        if (slide >= 2) {
            slideOn(slide - 1)
        }   
    }

    let slideClass

    if (slide === 1) {
        slideClass = s.slideContainer1
    } else if (slide === 2) {
        slideClass = s.slideContainer2
    } else if (slide === 3) {
        slideClass = s.slideContainer3
    } else if (slide === 4) {
        slideClass = s.slideContainer4
    } 

    const navigate = useNavigate();
    const onImages = (path) => {
        navigate(`/items/${path}`)
    }

    return (
        <div>
            <div className={classConnect([s.slideContainer, slideClass])}>
                
                <div className={classConnect([s.imag, s.im1])}>
                <NavLink to="/items/krosovki"><div className={s.textInImage}>Скидка на все кроссовки</div></NavLink>
                </div>
                
                <div className={classConnect([s.imag, s.im2])}></div>
                <div className={classConnect([s.imag, s.im3])}></div>
                <div className={classConnect([s.imag, s.im4])}></div>
            </div>
            <img onClick={slideEventRight} className={s.strelkaRight} src={b} alt="" />
            <img onClick={slideEventLeft} className={s.strelkaLeft} src={b} alt="" />
            
            <div className={s.gridContainer}>
                <div onClick={() => {onImages('odezhda')}} className={classConnect([s.gridItem, s.cloths])}>
                    <div className={s.gridItemInCloths}>Одежда и акссесуары</div>
                </div>
                <div onClick={() => {onImages('obuv')}} className={classConnect([s.shoes, s.gridItem])}>
                    <div className={s.gridItemInShoes}>Обувь</div>
                </div>
                <div onClick={() => {onImages('pitanie')}} className={classConnect([s.food, s.gridItem])}>
                    <div className={s.gridItemInFood}>Питание</div>
                </div>
                <div onClick={() => {onImages('sport')}} className={classConnect([s.sports, s.gridItem])}>
                    <div className={s.gridItemInSports}>Виды спорта</div>
                </div>
                
            </div>

        </div>
    )
}

export default Mainpage