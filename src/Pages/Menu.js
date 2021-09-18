import React from 'react'
import {Link} from 'react-router-dom'
import { StyledCard } from '../Components/Card.style'


const Menu = (props) => {
    return (
        <div>
        <h1>Our offerings!</h1>
        <div className="menudiv">
           <StyledCard>
             <Link to='/Breakfast'>Breakfast</Link>
             <h4>Served from 7am-11am!</h4>
            {/* image */}
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
        </div>
    )
}
export default Menu