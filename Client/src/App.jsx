import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Pages/Header'
import Banner from './Pages/Banner'
import PopularProducts from './Pages/PopularProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
      
    </>
  )
}

export default App
