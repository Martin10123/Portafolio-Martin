import React from "react";

import "./footer.css";

const FooterScreen = () => {
  return (
    <footer data-aos="zoom-in-right" id="contact">
      <div className="div_inside_footer">
        <div className="social_network_find_us pd-5">
          <h2>Redes Sociales</h2>
          <p>Me puedes encontrar en las siguientes redes sociales</p>
          <ul>
            <a href="https://www.instagram.com/?hl=es" target="blank">
              <li>Instagram</li>
            </a>
            <a href="https://www.facebook.com" target="blank">
              <li>Facebook</li>
            </a>
            <a href="https://github.com/Martin10123" target="blank">
              <li>Github</li>
            </a>
            <a href="a" target="blank">
              <li>Gmail</li>
            </a>
          </ul>
        </div>
        <div className="about_us_footer pd-5">
          <h2>Contactanos</h2>
          <span>Telefonos</span>
          <p>(+57)-(300)-(683)-(0624)</p>
          <p>(641-40-11)</p>
          <span>Email</span>
          <p>martinsimarra4@gmail.com</p>
          <p>martinsalgado100@hotmail.com</p>
          <span>Dirección</span>
          <p>Cartagena - Colombia</p>
          <p>Torices - Barrio</p>
        </div>
      </div>
      <div className="footer_end">
        <hr />
        <ul className="ul_footer_end">
          <li>Home</li>
          <li>Terms</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterScreen;
