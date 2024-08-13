import React from "react"
import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar.jsx"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage/Home.jsx"
import Video from './Pages/Video/Video.jsx'
import SearchPage from './Pages/SearchPage/SearchPage.jsx'
function App() {
  const [sidebar, setSidebar] = useState(true)

  return (
    <div>
      <Navbar setSidebar={setSidebar}/> 
        <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="video/:categoryId/:videoId" element={<Video/>} />
        <Route path='/SearchPage' element={<SearchPage/>} />
      </Routes> 
    </div>
  )
}

export default App
