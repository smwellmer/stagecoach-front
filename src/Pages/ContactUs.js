import React from 'react'


const ContactUs = (props) => {
    return (
        <div className='contactUs'>
        <h1 className='title'>Contact Us!</h1>
        <div className='contactPhoto'>
        <img src='Photos/large_building.jpeg' alt='cafe'/>
        </div>
        
        <div className='contactUsText'>
            <div>
            StageCoach Café
            </div>
            <div>
            120 W. Jefferson St.
            </div>
            <div>
            New Carlisle, OH 45344
            </div>
            <div>
            Phone: (937) 679-5282
            </div>
           <a href='https://www.facebook.com/TheStageCoachCafe'>Find us on Facebook!</a>
           <a href='https://www.instagram.com/stagecoachcafe/'>Follow us on Instagram!</a>
        </div>
        </div>
    )
}
export default ContactUs