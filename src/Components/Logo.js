import React from 'react'
import {Link} from 'react-router-dom'


const Logo = (props) => {
    return (
        <div className='logoContainer'>
        <Link to='/'><img id='logoImage' src='transparentlogo.png' alt='StageCoachCafeLogo'/></Link>
        </div>
    )
}

export default Logo