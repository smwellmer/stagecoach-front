import React from "react";
import { StyledCard } from '../Components/Card.style'

const Lunch = (props) => {
  return(
    <div>
      <h2 className='title'>Lunch</h2>
      <div className='foodDiv'>
          {props.menuList.filter(item => item.category === 'lunch').map((item, index) => {
                return (
                    <StyledCard className= 'lunch'>
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

export default Lunch;

