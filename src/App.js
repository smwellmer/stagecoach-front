import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './Pages/Home'
import MyCart from './Pages/MyCart'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'

// http://localhost:1337/menu-items

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
      <Header />
      <main>
      <Switch>
        <Route exact path = '/'>
          <Home menuList={menuList}/>
        </Route>
        <Route path = '/Menu'>
          <Menu />
        </Route>
        <Route path = '/MyCart'>
          <MyCart />
        </Route>
        <Route path = '/AboutUs'>
          <AboutUs />
        </Route>
        <Route path = '/ContactUs'>
          <ContactUs />
        </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;
