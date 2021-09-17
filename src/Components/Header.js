import React from 'react'
import {Link} from 'react-router-dom'
import { StyledHeader } from './Header.style'

const Header = (props) => {
    return  (
        <div>

        <StyledHeader>
        <Link to='/'><img className='logoImage' src='transparentlogo.png' alt='Stagecoachcafelogo'/></Link>
        <ul className='navLinks'>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>

        </StyledHeader>
    </div>
    )
}

export default Header