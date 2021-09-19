import React from 'react'
import {Link} from 'react-router-dom'
import { StyledCard } from '../Components/Card.style'


const Menu = (props) => {
    return (
        <div>
        <h1 className='menuTitle'>Our offerings!</h1>
        <div className="menudiv">
           <StyledCard>
             <Link to='/Breakfast'>Breakfast</Link>
             <h4>Served from 7am-11am!</h4>
             <img src='pancakes.jpeg' alt='breakfastimage'/> 
            </StyledCard>
            <StyledCard>
           <Link to='/Lunch'>Lunch</Link>
           <img src='turkeyreuben.jpg' alt='lunchimage'/> 
           </StyledCard>
            <StyledCard>
            <Link to='/Specials'>Specials</Link>
            <img src='beef_noodles.jpeg' alt='breakfastimage'/> 
            </StyledCard>
            <StyledCard>
            <Link to='/Desserts'>Desserts</Link>
            <img src='lazydaisyoatmealcake.jpg' alt='breakfastimage'/> 
            </StyledCard>
        </div>
        </div>
    )
}
export default Menu