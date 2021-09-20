import React from 'react'
import {Link} from 'react-router-dom'
import { StyledCard } from '../Components/Card.style'


const Menu = (props) => {
    return (
        <div>
        <h1 className='menuTitle'>Our offerings!</h1>
        <div className="menudiv">
           <StyledCard className='menuCards'>
             <Link to='/Breakfast'>Breakfast</Link>
             <h4>Served from 7am-11am!</h4>
             <img src='Photos/pancakes.jpeg' alt='breakfastimage'/> 
            </StyledCard>
            <StyledCard className='menuCards'>
           <Link to='/Lunch'>Lunch</Link>
           <img src='Photos/turkeyreuben.jpg' alt='lunchimage'/> 
           </StyledCard>
            <StyledCard className='menuCards'>
            <Link to='/Specials'>Specials</Link>
            <img src='Photos/beef_noodles.jpeg' alt='specialimage'/> 
            </StyledCard>
            <StyledCard className='menuCards'>
            <Link to='/Desserts'>Desserts</Link>
            <img src='Photos/lazydaisyoatmealcake.jpg' alt='dessertimage'/> 
            </StyledCard>
        </div>
        </div>
    )
}
export default Menu