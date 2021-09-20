import React from 'react'

const AboutUs = (props) => {
    return (
        <div className='aboutUsContainer'>
            {/* <h1>About StageCoach Café</h1> */}
            <h2>The Inspiration</h2>
            <div className='photodiv'>
            <img className='img1' src="Photos/grandmafreda.jpeg" alt="freda"/> 
            <img className='img2' src="Photos/piemamaw.jpeg" alt="vicki"/> 
            </div>
            <span>
               The two ladies pictured above greatly influenced what has come to be the StageCoach Café. 
               Many recipes and even more inspiration came from these women and their kitchens.               

            </span>

            <h2>The Founder & Chef</h2>
            <div className='owner'>
            <img className='img5' src="Photos/mom.jpeg" alt="andrea"/> 
            <span >
            Andrea Wallingford Barr founded the StageCoach Café in 2016. 
            She always had dreams of being able to share her love of great food and family recipes with others.  
            In 5 short years, she has created a successful business feeding the community with her delicious, scratch-made comfort food.
            </span>
            </div>
           
            <h2>The StageCoach Café</h2>
            <div className='photodiv'>
            <img className='img3' src="Photos/cafe2.jpg" alt="cafe1"/> 
            <img className='img4' src="Photos/cafe1.jpg" alt="cafe2"/> 
            </div>
            
            <span>
            The StageCoach Café is located in historic New Carlisle, near downtown. 
            The location was built in 1856 as a stagecoach stop. The staff often enjoy stories from customers
            who have lived or worked in the building over the years.
            </span>

        </div> 
        

    )
}
export default AboutUs

