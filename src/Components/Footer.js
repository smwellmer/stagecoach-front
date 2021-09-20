import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = (props) => {
    return (
    <div className='footer'>
        <a href='https://www.facebook.com/TheStageCoachCafe'><AiFillFacebook /></a>
        <a href='https://www.instagram.com/stagecoachcafe/'><AiFillInstagram/></a>
        
    </div>
     
    )
}

export default Footer