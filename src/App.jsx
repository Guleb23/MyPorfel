import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import ProjectsPage from './Components/ProjectsPage'
import DetailPage from './Components/DetailPage'

function App() {

  return (
    <div className='relative w-full h-full z-1  flex'>
      <div className="relative selection:text-cyan-900 selection:bg-cyan-200  text-neutral-300 antialiased  w-full h-full " >
        <div className='relative container mx-auto px-8  w-full'>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/projects' element={<ProjectsPage />}>

              </Route>
              <Route path='/detailPage' element={<DetailPage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default App
