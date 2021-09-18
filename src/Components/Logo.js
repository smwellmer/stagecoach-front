import React from 'react'
import {Link} from 'react-router-dom'


const Logo = (props) => {
    return (
        <Link to='/'><img id='logoImage' src='transparentlogo.png' alt='StageCoachCafeLogo'/></Link>
    )
}

export default Logo