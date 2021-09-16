import React from "react";

const Lunch = (props) => {
  return(
    <div>
      <h2>Lunch</h2>
          {props.menuList.filter(item => item.category === 'lunch').map((item, index) => {
                return (
                    <div className= 'lunch'>
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

export default Lunch;

