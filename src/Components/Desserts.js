import React from "react";
import { StyledCard } from '../Components/Card.style'

const Desserts = (props) => {
  return(
    <div>
    <h2 className='title'>Dessert</h2>
        {props.menuList.filter(item => item.category === 'dessert').map((item, index) => {
              return (
                  <StyledCard className= 'dessert'>
                      <div key={item.id}/>
                      <div>{item.name}</div>
                      <div className='itemDesc'>{item.desc}</div>
                      <img src={item.img} alt={item.name}/>
                 
                  </StyledCard>
              )
          })}
      </div>
  )
}

export default Desserts;