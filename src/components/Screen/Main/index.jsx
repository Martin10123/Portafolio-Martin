import React from "react";
import { dataLenguaje } from "../../../helpers/data";

import Portafolio from "./Portafolio";

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
      <main id="blog" className="main_container">
        <h1>Información personal</h1>
        <section className="main_section">
          <article className="main_personalInfo">
            <h2>Bienvenidos</h2>
            <p>
              Hola mi nombre es Martin Elias, soy un (Desarrollo Web Front End -
              Junior) de Colombia, tengo 20 años. Me interese hace más de un año
              en la programación, me daba curiosidad saber como funcionaban las
              computadoras por dentro. Empece viendo videos de programación y me
              recomendaron Udemy. Me empezo a gustar a interesar y me adentre
              investigando las diferentes ramas y me gusto la parte del
              Frontend, asi que tome un curso en Acamica, aprendi buenos
              conceptos, pero aprendi más cosas por mi cuenta y asi sigo, me
              gusta aprender cosas nuevas relacionadas a esto. <br />
              Al principio no me gustaba mucho porque no entendia muchas cosas y
              sentia que no era para mi, pero al pasar del tiempo gracias a
              buenos consejos y a empezar de cero nuevamente le empece a agarrar
              un poco la onda y me empezo a gustar nuevamente, ahora paso la
              mayoria del tiempo viendo videos y intentando aprender nuevas.
              Disfruto construyendo interfaces graficas con React, me divirto
              mucho haciendolo.
            </p>
          </article>
          <aside className="main_content">
            <ul className="main_ul_lenguaje">
              <h3>Lenguaje, editos de codigo, framework, base de datos</h3>
              {subject.splice(0, 7)}
            </ul>
            <ul className="main_ul_desing">
              <h3>Para maquetar utilizo</h3>
              {subject.splice(0, 6)}
            </ul>
            <ul className="main_ul_test">
              <h3>Para las pruebas utilizo</h3>
              {subject.splice(0, 2)}
            </ul>
          </aside>
        </section>
        <Portafolio />
      </main>
    </>
  );
};

export default MainScreen;
