import React from "react";
import { StyledCard } from '../Components/Card.style'

const Specials = (props) => {
  return (
    <div>
    <h2 className='title'>Specials</h2>
        <div className='specials'>
        <h4>Tuesday: Cheesy Potato and Ham Bake</h4>
        <h4>Wednesday: Meaty Taco Salad</h4>
        <h4>Thursday: Cabbage Rolls</h4>
        <h4>Friday: Chicken and Noodles</h4>
        <h4>Saturday: Chef's Choice</h4>
        </div>
        <div className='foodDiv'>
        {props.menuList.filter(item => item.category === 'special').map((item, index) => {
              return (
                  <StyledCard className= 'special'>
                      <div key={item.id}/>
                      <div>{item.name}</div>
                      <div className='itemDesc'>{item.desc}</div>
                      <img src={item.img} alt={item.name}/>
                 
                  </StyledCard>
              )
          })}
          </div>
      </div>
  )
}

export default Specials;