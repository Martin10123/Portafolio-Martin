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
      <nav className="navbar">
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
          <ul className="navbar_ul">
            <li className="navbar_li">Blog</li>
            <li className="navbar_li">briefcase</li>
            <li className="navbar_li">Contact</li>
            <li className="navbar_li">Cv</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
