
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Project from './Project'
import { useState } from 'react'
import Header from './components/Header'

import ProjectContext from './ProjectContext'

function App() {
  const [projects, setProjects] = useState([])

  return (
    <BrowserRouter>
      <ProjectContext.Provider value={{ projects, setProjects }}>
         <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </ProjectContext.Provider>
    </BrowserRouter>
  )
}

export default App
