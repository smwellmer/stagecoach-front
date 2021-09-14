import React from 'react'

const Menu = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Menu</h2>
            {props.menuList.map((item, index) => {
                return (
                    <div className= 'menuItem'>
                        <div key={index}/>
                        <div>{item.name}</div>
                        <div>{item.desc}</div>
                        <div>${item.price}</div>
                        <img src={"http://localhost:1337" + item.img} alt={item.name}/>
                   
                    </div>
                )
            })}
        </div>
    )
}
export default Menu