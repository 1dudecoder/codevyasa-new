import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Navbar from "./Components/Navbar/Navbar";
import MyServices from "./Components/Services/MyServices";
import Footer from "./Components/Footer/Footer";
import MyEngineering from "./Components/Engineering/MyEngineering";
import Pricing from "./Components/Pricing/Pricing";
import About from "./Components/About/About";
import Ourteam from "./Components/OurTeam/Ourteam";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <div className="mt-24">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services/:id" element={<MyServices />} />
          <Route exact path="/engineering/:id" element={<MyEngineering />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/our-team" element={<Ourteam />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
