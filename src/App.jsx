import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Maincontent from './components/Maincontent'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='page-layout'>
      <Navigation/>
      <Header/>
      <Maincontent/>
      <Footer/>
    </main>
  )
}

export default App
