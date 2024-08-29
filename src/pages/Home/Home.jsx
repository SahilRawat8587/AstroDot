import React from "react";
import Header from "../../component/Header/Header";
import Steps from "../../component/Steps/Steps";
import Count from "../../component/Count/Count";
import Horoscope from "../../component/Horoscope/Horoscope";
import Blog from "../../component/Blog/Blog";
import "./Home.css";
import Astrology from "../../component/Astrology/Astrology";
import CTA from "../../component/CTA/CTA";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Count />
      <Blog />
      <Horoscope />
      <Astrology />
      <CTA />
    </div>
  );
};

export default Home;