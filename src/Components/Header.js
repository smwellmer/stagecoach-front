import React from 'react'
import {Link} from 'react-router-dom'


const Header = (props) => {
    return  (
        <div className='header'>
            <span className='link'><Link to="/Menu">Menu</Link></span>
            <span className='link'><Link to="/AboutUs">About Us</Link></span>
            <span className='link'><Link to="/ContactUs">Contact Us</Link></span>
        </div>
    )
}

export default Header