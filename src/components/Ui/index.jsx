import React, { useState } from "react";
import logo1 from "../../images/logo.png";
import menu from "../../images/menu.svg";
import equis from "../../images/equis.svg";

import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleChangeMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <nav data-aos="zoom-in-right" className="navbar">
        <div className="navbar_box_img">
          <img src={logo1} alt="Logo" />
        </div>
        <div className="navbar_menu">
          {show ? (
            <img
              onClick={handleChangeMenu}
              src={equis}
              alt="equis"
              className="navbar_equis"
            />
          ) : (
            <img onClick={handleChangeMenu} src={menu} alt="Menu" />
          )}
        </div>
        <div
          className={
            show ? "navbar_content" : " navbar_content navbar_content_hidden"
          }
        >
          <div className="navbar_ul">
            <a href="#blog" className="navbar_a">
              Info
            </a>
            <a href="#briefcase" className="navbar_a">
              Portafolio
            </a>
            <a href="#contact" className="navbar_a">
              Contacto
            </a>
            <a
              href="https://docs.google.com/document/d/1V3OpXyQ-kjset-bIrQHP0KB5jnqCFUBkjDaWU2Scy5E/edit?usp=sharing"
              target="blank"
              className="navbar_a"
            >
              Cv
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
