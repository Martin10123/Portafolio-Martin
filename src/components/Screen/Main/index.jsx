import React from "react";
import { dataLenguaje } from "../../../helpers/data";

import "./main.css";

const MainScreen = () => {
  const subject = dataLenguaje.map((a) => {
    const Components = a.icons;
    return (
      <span className="span_inside_ul" key={a.id}>
        <Components className="span_icons" />
        <li>{a.title}</li>
      </span>
    );
  });

  return (
    <>
      <div className="main_background"></div>
      <main className="main_container">
        <h1>Información personal</h1>
        <section className="main_section">
          <article className="main_personalInfo">
            <h2>Mi nombre es Martin Elias</h2>
            <p>
              Hola mi nombre es Martin Elias, soy un (Desarrollo Web Front End -
              Junior) de Colombia. Al principio no me gustaba mucho esto de
              programar, pero al pasar del tiempo me empezó a gustar muchísimo y
              ahora siempre quiero aprender cosas nuevas. Disfruto construyendo
              interfaces graficas con React, aunque sea estresante, pero me
              divierte mucho hacerlo.
            </p>
          </article>
          <aside className="main_content">
            <ul className="main_ul_lenguaje">
              <h3>Lenguaje, editos de codigo, framework, base de datos</h3>
              {subject.splice(0, 6)}
            </ul>
            <ul className="main_ul_desing">
              <h3>Para maquetar utilizo</h3>
              {subject.splice(0, 4)}
            </ul>
            <ul className="main_ul_test">
              <h3>Para las pruebas utilizo</h3>
              {subject.splice(0, 2)}
            </ul>
          </aside>
        </section>
      </main>
    </>
  );
};

export default MainScreen;
