import React from "react";
import { dataApps } from "../../../../helpers/dataApp";

import "./portafolio.css";

const Portafolio = () => {
  return (
    <div className="portafolio_card_body">
      <div className="portafolio_background">
        <h2 id="#briefcase" className="portafolio_h2">
          Portafolio de proyectos
        </h2>
        <div className="portafolio_container">
          {dataApps.map((app) => (
            <article key={app.id} className="portafolio_card_img">
              <h1>{app.title}</h1>
              <img src={app.img} alt={app.title} />
              <div className="portafolio_buttons">
                <button>Github</button>
                <button>Go to page...</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
