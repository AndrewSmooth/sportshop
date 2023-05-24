import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import Shoes from './Sections/Shoes'


const Header = () => {

    let [shoes, shoesOn] = useState(false)

    const shoesEvent = () => {
        if (!shoes) {
            shoesOn(true)
            clothsOn(false)
            foodOn(false)
            sportsOn(false)

        } 
    }

    const shoesEventOff = () => {
        if (shoes) {
            shoesOn(false)
        } 
    }

    let [cloths, clothsOn] = useState(false)

    const clothsEvent = () => {
        if (!cloths) {
            clothsOn(true)
            shoesOn(false)
            foodOn(false)
            sportsOn(false)
        } 
    }

    const clothsEventOff = () => {
        if (cloths) {
            clothsOn(false)
        } 
    }

    let [food, foodOn] = useState(false)

    const foodEvent = () => {
        if (!food) {
            foodOn(true)
            shoesOn(false)
            clothsOn(false)
            sportsOn(false)
        } 
    }

    const foodEventOff = () => {
        if (food) {
            foodOn(false)
        } 
    }

    let [sports, sportsOn] = useState(false)

    const sportsEvent = () => {
        if (!sports) {
            sportsOn(true)
            shoesOn(false)
            clothsOn(false)
            foodOn(false)
        } 
    }

    const sportsEventOff = () => {
        if (sports) {
            sportsOn(false)
        } 
    }

    const style = {
        height: '10rem'
    }

    function offAll() {
        sportsOn(false)
        foodOn(false)
        clothsOn(false)
        shoesOn(false)
    }

    return (
        <div style={style}>
            <div className={s.container}>
                <NavLink to='/'><img src="https://cdn-icons-png.flaticon.com/512/3716/3716899.png" alt="" className={s.logo} /></NavLink>
                <div className={s.itemContain} onMouseOver={shoesEvent}>
                    <NavLink to='/cloths'><div className={s.item}>Одежда и аксессуары</div></NavLink>
                </div>

                <div className={s.itemContain} onMouseOver={clothsEvent}>
                    <NavLink to='/shoes'><div className={s.item}>Обувь</div></NavLink>
                </div>

                <div className={s.itemContain} onMouseOver={foodEvent}>
                    <NavLink to='/food'><div className={s.item}>Питание</div></NavLink>
                </div>

                <div className={s.itemContain} onMouseOver={sportsEvent}>
                    <NavLink to='/sports'><div className={s.item}>Виды спорта</div></NavLink>
                </div>

            </div>
            <Shoes onMouseOut={shoesEventOff} sections={[{'/items/trousers':'Брюки'}, {'/items/tights':'Трико'}, {'/items/hoodie':'Худи'}, {"/items/tshort":'Футболки'}]} containerIn={shoes ? s.containerIn : s.containerInOff} itemIn={shoes ? s.itemIn : s.itemInOff} />
            <Shoes onMouseOut={clothsEventOff} sections={[{'/items/shoes':'Кроссовки'}, {'/items/boots':'ботинки'}, {'/items/formen':'Мужское'}, {'/items/forwomen':'Женское'}]} containerIn={cloths ? s.containerIn : s.containerInOff} itemIn={cloths ? s.itemIn : s.itemInOff} />
            <Shoes onMouseOut={foodEventOff} sections={[{'/items/protein':'Протеин'}, {'/items/creatin':'Креатин'}, {'/items/vitamins':'Витамины'}]} containerIn={food ? s.containerIn : s.containerInOff} itemIn={food ? s.itemIn : s.itemInOff} />
            <Shoes onMouseOut={sportsEventOff} sections={[{'/items/football':'Футбол'}, {'/items/volleyball':'Волейбол'}, {'/items/tennis':'Тенис'}]} containerIn={sports ? s.containerIn : s.containerInOff} itemIn={sports ? s.itemIn : s.itemInOff} />
            <div className={s.offTrigger} onMouseOut={offAll}></div>
        </div>
    )
}



export default Header