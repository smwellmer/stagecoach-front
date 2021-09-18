import React from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Menu from './Pages/Menu'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import Breakfast from './Components/Breakfast'
import Lunch from './Components/Lunch'
import Specials from './Components/Specials'
import Desserts from './Components/Desserts'
import Logo from './Components/Logo'


function App() {

  const [menuList, setMenuList] = useState([])

  const getMenuList = async () => {
    const response = await fetch("https://cdn.contentful.com/spaces/nuxt2k9keljx/environments/master/entries?access_token=WBB0A7KEgs5r_5dgCN_2eYlm-JJgdhmXsZM4mNKnnpo&content_types_id/food")
    const data = await response.json()
    console.log(data)
    const itemArr = data.items.map((item, index) => {
       return {
        id: item.sys.id,
        name: item.fields.name,
        img: data.includes.Asset.filter((img) => {
          let id = img.sys.id
          return id === item.fields.image.sys.id
          })[0].fields.file.url,
        desc: item.fields.description,
        category: item.fields.category,
      }
   })
    setMenuList(itemArr)
  }

  useEffect(() => {getMenuList()}, [])


  return (
    <div className="App">
      <Logo />
      <Header />
 
      <main>
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/Menu'>
          <Menu menuList={menuList}/>
        </Route>
        <Route path = '/Breakfast'>
          <Breakfast menuList={menuList}/>
        </Route>
        <Route path = '/Lunch'>
          <Lunch menuList={menuList}/>
        </Route>
        <Route path = '/Desserts'>
          <Desserts menuList={menuList}/>
        </Route>
        <Route path = '/Specials'>
          <Specials menuList={menuList}/>
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
