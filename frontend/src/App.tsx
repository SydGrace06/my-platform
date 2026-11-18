
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Art from './pages/Art'
import Resume from './pages/Resume'

function App() {
  return (
    <BrowserRouter>
      <main className="landing">
        <div className="page-shell">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App