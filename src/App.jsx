import React from 'react'
import './App.css'
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import Navbar from './Components/Navbar';
import MyServices from './Components/Services/MyServices';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />  
      <Route exact path="/services/:id" element={<MyServices />} />  
      <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
