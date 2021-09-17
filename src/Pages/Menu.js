import React from 'react'
import Breakfast from '../Components/Breakfast'
import Lunch  from '../Components/Lunch'
import Desserts from '../Components/Desserts'
import Specials from '../Components/Specials'
import {Link} from 'react-router-dom'
import { StyledCard } from '../Components/Card.style'


const Menu = (props) => {
    return (
        <div>
        <h1>Our offerings!</h1>
           <StyledCard>
             <Link to='/Breakfast'>Breakfast</Link>
             {/* <img src='/biscuit.jpeg' /> */}
            </StyledCard>
            <StyledCard>
           <Link to='/Lunch'>Lunch</Link>
           </StyledCard>
            <StyledCard>
            <Link to='/Specials'>Specials</Link>
            </StyledCard>
            <StyledCard>
            <Link to='/Desserts'>Desserts</Link>
            </StyledCard>
        </div>
    )
}
export default Menu