import React from "react";

const Breakfast = (props) => {
  return (
    <div>
    <h2>Breakfast</h2>
        {props.menuList.filter(item => item.category === 'breakfast').map((item, index) => {
              return (
                  <div className= 'breakfast'>
                      <div key={item.id}/>
                      <div>{item.name}</div>
                      <div>{item.desc}</div>
                      <img src={item.img} alt={item.name}/>
                 
                  </div>
              )
          })}
      </div>
  )
}

export default Breakfast;