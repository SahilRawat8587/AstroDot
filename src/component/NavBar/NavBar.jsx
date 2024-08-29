import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt=" logo" className="logo" /></Link>
      <div className="navbar-conatiner">
      <ul className="navbar-menu">
        <Link to='/'><li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li></Link>

        <li
          onClick={() => setMenu("kundli")}
          className={menu === "kundli" ? "active" : ""}
        ><Link to="/Kundli">
          Kundli</Link>
        </li>

        <Link to = "/AstroMall"><li
          onClick={() => setMenu("astromall")}
          className={menu === "astromall" ? "active" : ""}
        >
          AstroMall
        </li></Link>

        <Link to ="/AstroBlog">
        <li
          onClick={() => setMenu("blog")}
          className={menu === "blog" ? "active" : ""}
        >
          Blog
        </li></Link>

        <li
          onClick={() => setMenu("services")}
          className={menu === "services" ? "active" : ""}
        >
          <form className="services">
          <select id="service" name="service" required onChange={handleSelectChange}>
                    <option value="">Other Services</option>
                    <option value="/DailyHoro">Horoscope</option>
                    <option value="/KundliMatching"> Kundli Matching </option>
                    <option value="/OurAstrologer"> Astrologers </option>
                    <option value="other">Other</option>
                </select></form>
        </li>
      </ul>
      <div>
        <button className="navbar-right">
          <img src={assets.user} alt="" />
          <span> Login </span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
