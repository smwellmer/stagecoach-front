import React from "react";
import { StyledCard } from '../Components/Card.style'

const Specials = (props) => {
  return (
    <div>
    <h2 className='title'>Specials</h2>
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
  )
}

export default Specials;