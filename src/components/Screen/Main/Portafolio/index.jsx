import React, { useState } from "react";
import { dataApps } from "../../../../helpers/dataApp";
import ModalScreen from "../../../Modal";

import "./portafolio.css";

const Portafolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [chooser, setChooser] = useState([]);

  const handleModal = (id) => {
    const data = dataApps.filter((data) => data.id === id);
    setChooser(data);
    setShowModal(!showModal);
  };
  return (
    <>
      <div data-aos="fade-down" id="briefcase" className="portafolio_card_body">
        <div className="portafolio_background">
          <h2 className="portafolio_h2">Portafolio de proyectos</h2>
          <div className="portafolio_container">
            {dataApps.map((app) => (
              <article key={app.id} className="portafolio_card_img">
                <h1>{app.title}</h1>
                <img
                  onClick={() => handleModal(app.id)}
                  src={app.img}
                  alt={app.title}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
      {showModal && <ModalScreen chooser={chooser} handleModal={handleModal} />}
    </>
  );
};

export default Portafolio;
