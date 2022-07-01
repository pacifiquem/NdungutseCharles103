import { useState } from 'react'
import './App.css'
import Home from './sections/Home'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className="App flex w-full">
      <SideBar />
      <Home />
    </div>
  )
}

export default App
