import { Route, Routes } from 'react-router-dom'
import Mainpage from './Content/Mainpage'
import s from './Main.module.css'
import OneItemContainer from './Content/OneItem/OneItemContainer'
import ItemsContaner from './Content/Items/ItemsContaner'


const Main = () => {
    return (
        <div className={s.back}>
            <Routes>
                <Route path='/' element={<Mainpage />}></Route>
                <Route path='/item/:itemId' element={<OneItemContainer />}></Route>
                <Route exact path='/items/:tags' element={<ItemsContaner />}></Route>
            </Routes>
        </div>
    )
}

export default Main