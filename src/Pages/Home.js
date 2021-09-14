import React from 'react'
import Menu from '../Components/Menu'
import PhotoCarousel from '../Components/PhotoCarousel'

const Home = (props) => {
    return <div>
        {/* <Menu menuList={props.menuList} /> */}
        <img src='biscuit.jpeg' />
        <h1>Welcome to the Stagecoach Café...</h1>
        <h2>Where we feed you like family!</h2>
        <PhotoCarousel />
    </div>
}
export default Home