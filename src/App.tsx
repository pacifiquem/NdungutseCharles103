import { useState } from 'react'
import './App.css'
import Home from './sections/Home'
import SideBar from './components/SideBar'
import Skills from './sections/Skills'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App flex flex-col w-full overflow-x-hidden">
      {/* <SideBar /> */}
      <Navbar />
      <div className="flex flex-col w-full">
        <Home />
        <Skills />
      </div>
    </div>
  )
}

export default App
