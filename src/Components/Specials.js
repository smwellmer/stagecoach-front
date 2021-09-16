import React from "react";

const Specials = (props) => {
  return (
    <div>
    <h2>Specials</h2>
        {props.menuList.filter(item => item.category === 'special').map((item, index) => {
              return (
                  <div className= 'special'>
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

export default Specials;