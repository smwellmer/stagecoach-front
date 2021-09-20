import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay className='carousel'>
    <div>
      <img alt="biscuit" src="Photos/biscuit.jpeg" />
      <p className="legend">Our Famous Biscuits</p>
    </div>
    <div>
      <img alt="appleturnovers" src="Photos/pattymelt.jpg" />
      <p className="legend">Patty Melt</p>
    </div>
    <div>
      <img alt="" src="Photos/WallingfordCoffee.jpg" />
      <p className="legend">Wallingford Coffee</p>
    </div>
    <div>
      <img alt="" src="Photos/strawberryrhubarb_crop.jpg" />
      <p className="legend">Strawberry Rhubarb Pie</p>
    </div>
    <div>
      <img alt="" src="Photos/coconutcreampie.jpeg" />
      <p className="legend">Coconut Creme Pie</p>
    </div>
    <div>
      <img alt="" src="Photos/applepie.jpeg" />
      <p className="legend">Caramel Apple Pie</p>
    </div>
    <div>
      <img alt="" src="Photos/baked_potato.jpeg" />
      <p className="legend">Loaded Baked Potato</p>
    </div>
    <div>
      <img alt="" src="Photos/strawberrystuffeddonut.jpeg" />
      <p className="legend">Strawberry Stuffed Donut</p>
    </div>
    {/* <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div> */}
  </Carousel>
);