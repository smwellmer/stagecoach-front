import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return  (
        <div>
        <img className='logo' src='stagecoach_final_highres.jpg' alt='Stagecoachcafelogo'/>
        <ul>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
    </div>
    )
}

export default Header