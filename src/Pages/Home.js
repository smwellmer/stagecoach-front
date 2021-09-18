import React from 'react'

// import PhotoCarousel from '../Components/PhotoCarousel'

const Home = (props) => {
    return <div className='homePage'>
        <div className='mainPhotoContainer'>
            <img className='mainPhoto'src="building.edit.jpg" alt='building'/>
        </div>
        <div className='homePageText'>
            <h1>Welcome to the Stagecoach Café...</h1>
            <h2>Where we feed you like family!</h2>
        </div>
            <button className='button'><a href='https://www.grubhub.com/restaurant/stagecoach-cafe-120-jefferson-street-new-carlisle/2829265'>Order on GrubHub!</a></button>
    </div>
}
export default Home