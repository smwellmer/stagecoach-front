import React from 'react'
import Breakfast from '../Components/Breakfast'
import Lunch  from '../Components/Lunch'
import Desserts from '../Components/Desserts'
import Specials from '../Components/Specials'
import {Link} from 'react-router-dom'


const Menu = (props) => {
    return (
        <div>
        <h1>Our offerings!</h1>
           <div>
             <Link to='/Breakfast'>Breakfast</Link>
           </div>
           <div>
           <Link to='/Lunch'>Lunch</Link>
           </div>
            <div>
            <Link to='/Specials'>Specials</Link>
            </div>
            <div>
            <Link to='/Desserts'>Desserts</Link>
            </div>
        </div>
    )
}
export default Menu