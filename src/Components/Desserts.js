import React from "react";

const Desserts = (props) => {
  return(
    <div>
    <h2>Dessert</h2>
        {props.menuList.filter(item => item.category === 'dessert').map((item, index) => {
              return (
                  <div className= 'dessert'>
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

export default Desserts;