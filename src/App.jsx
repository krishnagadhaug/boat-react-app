import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import View from './components/View'
import AddHouse from './components/AddHouse'
import Search from './components/Search'
import Delete from './components/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<AddHouse />} />
  <Route path="/search" element={<Search />} />
  <Route path="/delete" element={<Delete />} />
  <Route path="/view" element={<View />} />
  
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
