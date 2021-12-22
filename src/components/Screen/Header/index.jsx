import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { dataImages } from "../../../helpers/images";

import "./header.css";

const HeaderScreen = () => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <>
      <div className="header_background"></div>
      <div className="header_content">
        <div className="carousel">
          <div
            className="carousel_inner"
            style={{ backgroundImage: `url(${dataImages[currImg].image})` }}
          >
            <div
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
              className="left"
            >
              <AiOutlineArrowLeft className="carousel_arrow" />
            </div>
            <article className="center">
              <h1>{dataImages[currImg].title}</h1>
              <span>
                <p>{dataImages[currImg].body}</p>
                <button>Show more...</button>
              </span>
            </article>
            <div
              onClick={() => {
                currImg < dataImages.length - 1 && setCurrImg(currImg + 1);
              }}
              className="right"
            >
              <AiOutlineArrowRight className="carousel_arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderScreen;
