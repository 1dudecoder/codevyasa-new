import React from 'react'
import './App.css'
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import Navbar from './Components/Navbar';
import MyServices from './Components/Services/MyServices';
import Footer from './Components/Footer';
import MyEngineering from './Components/Engineering/MyEngineering';
import Pricing from './Components/Pricing/Pricing';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />  
      <Route exact path="/services/:id" element={<MyServices />} />  
      <Route exact path="/engineering/:id" element={<MyEngineering />} />  
      <Route exact path="/pricing" element={<Pricing />} />  
      <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
