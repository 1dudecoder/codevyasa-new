import React from 'react'
import './App.css'
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import Navbar from './Components/Navbar';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />  
      <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
