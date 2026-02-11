import './App.css'
import { Navbar } from './components/Navbar'
import Homemain from './pages/Home-page/Homemain'

import { Routes, Route } from "react-router-dom";
import TeamMain from './pages/Team/Teammain';
import ContactComponent from './pages/Contact/ContactSection';
import Footer from './components/Footer';
import Portfolio from './pages/Portgfolio/Portfolio';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="/portfolio" element={< Portfolio/>} />
        <Route path="/founder" element={<TeamMain />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
