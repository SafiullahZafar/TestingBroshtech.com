import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import Homemain from './pages/Home-page/Homemain'

import { Routes, Route } from "react-router-dom";
import TeamMain from './pages/Team/Teammain';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="/founder" element={<TeamMain />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
