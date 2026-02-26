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
import CustomCursor from './components/CustomCursor';
import Branding2 from './components/Branding/Branding2';
import { Toaster } from 'react-hot-toast';
import Branding3 from './components/Branding/Branding3';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <SCROOLToTop />
      <CustomCursor />
      <main>
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/founder" element={<TeamMain />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/branding1" element={<Branding1 />} />
          <Route path="/branding2" element={<Branding2 />} />
          <Route path="/branding3" element={<Branding3 />} />
          <Route path="/socialmedia1" element={<SocialMedia1 />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
