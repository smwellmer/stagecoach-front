import React from 'react'

const AboutUs = (props) => {
    return (
        <div className='aboutUsContainer'>
            {/* <h1>About StageCoach Café</h1> */}
            <h2>The Inspiration</h2>
            <img className='img1' src="Photos/grandmafreda.jpeg" alt="freda"/> 
            <img className='img2' src="Photos/piemamaw.jpeg" alt="vicki"/> 
            
            <span>
               The two ladies pictured above greatly influenced what has come to be the StageCoach Café. 
               Many recipes and even more inspiration come from these women and their kitchens.               

            </span>

            <h2>The Founder & Chef</h2>
            <img className='img5' src="Photos/mom.jpeg" alt="andrea"/> 

            <span>
              Andrea Wallingford Barr founded the StageCoach Café in 2016. 
              She always had dreams of being able to share her love of great food and family recipes with others.  
              In 5 short years, she has been able to build her business and create a wonderful community in New Carlisle.

            </span>
            <img className='img3' src="Photos/cafe2.jpg" alt="cafe1"/> 
           <img className='img4' src="Photos/cafe1.jpg" alt="cafe2"/> 
            <span>
            The StageCoach Café is located just outside the center of New Carlisle. 
            The café is rightly named, as the building used to be a stagecoach stop.
            Now updated, with a cute "farmhouse" feel, the food and decor are both equally inviting!
            </span>

        </div> 
        

    )
}
export default AboutUs

