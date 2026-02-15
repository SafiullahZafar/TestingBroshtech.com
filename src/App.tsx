import './App.css'
import { Navbar } from './components/Navbar'
import Homemain from './pages/Home-page/Homemain'

import { Routes, Route } from "react-router-dom";
import TeamMain from './pages/Team/Teammain';
import ContactComponent from './pages/Contact/ContactSection';
import Footer from './components/Footer';
import Portfolio from './pages/Portgfolio/Portfolio';
import Branding1 from './components/Branding/Branding1';
import SocialMedia1 from './components/Socialmedia/Socialmedia1';
import SCROOLToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <SCROOLToTop />
      <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="/portfolio" element={< Portfolio/>} />
        <Route path="/founder" element={<TeamMain />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/branding1" element={<Branding1 />} />
        <Route path="/socialmedia1" element={<SocialMedia1 />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
