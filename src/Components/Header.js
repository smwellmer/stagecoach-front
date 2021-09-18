import React from 'react'
import {Link} from 'react-router-dom'


const Header = (props) => {
    return  (
        <div>
        <ul className='navLinks'>
            <li className='link'><Link to="/Menu">Menu</Link></li>
            <li className='link'><Link to="/AboutUs">About Us</Link></li>
            <li className='link'><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
    </div>
    )
}

export default Header