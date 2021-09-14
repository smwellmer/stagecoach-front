import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './Pages/Home'


function App() {

  const [menuList, setMenuList] = useState([])

  const getMenuList = async () => {
    const response = await fetch("http://localhost:1337/menu-items")
    const data = await response.json()
    console.log(data)
    const itemArr = data.map((item, index) => { 
      console.log("image", item.image)
       return {
         id: item.id,
         name: item.name,
         img: item?.image[0]?.url,
         desc: item.description,
         price: item.price
      }
   })
    setMenuList(itemArr)
  }

  useEffect(() => {getMenuList()}, [])


  return (
    <div className="App">
      <Home menuList={menuList}/>
    </div>
  );
}

export default App;
