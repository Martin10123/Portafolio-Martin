import React from "react";

import "./modal.css";

const ModalScreen = ({ handleModal, chooser }) => {
  return (
    <>
      <div className="background_modal"></div>
      <section data-aos="zoom-in" className="modal_content">
        {chooser.map((app) => {
          return (
            <div key={app.id} className="modal_info">
              <button onClick={handleModal} className="close_modal">
                X
              </button>

              <div className="modal_title">
                <h1>{app.title}</h1>
                <span>
                  <p>Estado: {app.status}</p>
                  <p>Pruebas: {app.testing}</p>
                </span>
                <p className="modal_phosting">Desplegado en: {app.hosting}</p>
              </div>
              <div className="modal_img">
                <img src={app.img} alt="Modal" />
              </div>
              <div className="modal_description">
                <h2>¿De que trata?</h2>
                <p>{app.desc}</p>
              </div>
              <ul className="modal_ul">
                <h2>Herramientas utilizadas</h2>
                {chooser[0].tools.map((tools) => (
                  <li key={tools}> {tools} </li>
                ))}
              </ul>
              <div className="modal_contain_button">
                {app.github !== "" && (
                  <a href={app.github} target="blank">
                    Github
                  </a>
                )}
                {app.web !== "" && (
                  <a href={app.web} target="blank">
                    Web
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ModalScreen;
