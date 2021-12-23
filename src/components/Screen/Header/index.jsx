import React from "react";
import blackPicture from "../../../images/blac.jpg";

import "./header.css";

const HeaderScreen = () => {
  return (
    <>
      <div className="header_background">
        <img src={blackPicture} alt="blackPicture" />
      </div>
    </>
  );
};

export default HeaderScreen;
