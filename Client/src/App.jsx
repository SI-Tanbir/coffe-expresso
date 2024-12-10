import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Pages/Header'
import Banner from './Pages/Banner'
import PopularProducts from './Pages/PopularProducts'
import FollowPages from './Pages/FollowPages'
import Footer from './Pages/Footer'

function App() {


  return (
    <div >
      <Header></Header>
      <Banner></Banner>
      <div className='max-w-5xl mx-auto'>

      <PopularProducts></PopularProducts>
      <FollowPages></FollowPages>


      </div>
      <Footer></Footer>

      
    </div>
  )
}

export default App
