import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Pages/Nav'
import Main from './Pages/Main'
import Cards from './Pages/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="header">
        <nav className="navbar">
          <Nav />
        </nav>
        <main>
          <Main />
        </main>
      </div>
      <div className="">
        <h1>Movies</h1>
      </div>
      <div className="">
        <Cards />
      </div>
      
    </>
  )
}

export default App
