import { useState } from 'react'
import './App.css'
import Home from './sections/Home'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Fields from './sections/Fields'
import Skills from './sections/Skills'

function App() {

  return (
    <>
      <div className="App w-full ">
        <Navbar />
        {/* <SideBar /> */}
        <div className="flex flex-col w-full overflow-x-hidden">
          <Home />
          <Fields />
          <Skills />
        </div>
      </div>
    </>
  )
}

export default App
