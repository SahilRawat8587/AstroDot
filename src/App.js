import "./index.css";
import React from "react";
import NavBar from "./component/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Kundli from "./pages/Kundli/Kundli";
import AstroMall from "./pages/AstroMall/AstroMall";
import Footer from "./component/Footer/footer"
import AstroBlog from "./pages/AstroBlog/AstroBlog";
import KundliMatching from "./pages/KundliMatching/KundliMatching";
import DailyHoro from "./pages/DailyHoro/DailyHoro";
import OurAstrologers from "./pages/OurAstrologers/OurAstrologers";
import Profile from "./pages/Profile/Profile";

function App() {
  
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kundli" element={<Kundli />} />
        <Route path="/AstroMall" element={<AstroMall />} />
        <Route path="/AstroBlog" element = {<AstroBlog />} />
        <Route path="/KundliMatching" element={<KundliMatching />} />
        <Route path="/DailyHoro" element={<DailyHoro />} />
        <Route path="/OurAstrologer" element={<OurAstrologers />} />
        <Route path="/Profile" element={<Profile />} />
        
      </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;
