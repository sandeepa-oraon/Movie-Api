import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="header">
        <nav className="navbar">
          <Nav />
        </nav>
      </div>
      <div className="">
        <h1>Movies</h1>
      </div>
      
    </>
  )
}

export default App