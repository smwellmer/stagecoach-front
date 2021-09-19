import React from 'react'
import { render } from "react-dom";
import PhotoCarousel from "../Components/PhotoCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import PhotoCarousel from '../Components/PhotoCarousel'

const Home = (props) => {
    return <div className='homePage'>
        <div className='mainPhotoContainer'>
            <img className='mainPhoto'src="Photos/building.edit.jpg" alt='building'/>
        </div>
        <div className='homePageText'>
            <h1>Welcome to the StageCoach Café...</h1>
            <h2>Where we feed you like family!</h2>
        </div>
            <button className='button'><a href='https://www.doordash.com/store/stagecoach-cafe-new-carlisle-691066/'>Order on DoorDash!</a></button>
            <PhotoCarousel />
    </div>
}
export default Home