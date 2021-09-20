import React from "react";
import { StyledCard } from '../Components/Card.style'

const Breakfast = (props) => {
  return (
    <div>
    <h2 className='title'>Breakfast</h2>
        {props.menuList.filter(item => item.category === 'breakfast').map((item, index) => {
              return (
                  <div className='menudiv'>
                  <StyledCard className= 'breakfast'>
                      <div key={item.id}/>
                      <div>{item.name}</div>
                      <div className='itemDesc'>{item.desc}</div>
                      <img src={item.img} alt={item.name}/>
                  </StyledCard>
                  </div>
              )
          })}
      </div>
  )
}

export default Breakfast;