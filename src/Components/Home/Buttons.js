/** @format */

import React from "react";
import { classNames } from "../../lib/class-names";
import "./Commoncss.css";

const Buttons = ({ buttonText, outline }) => {
  return (
    <>
      <a href="https://skillcoup.com/contact"
        className={classNames(
          "button mx-2",
          outline && "bg-transparent border"
        )}>
        {buttonText}
        <i class='icon-material-outline-arrow-right-alt'></i>
      </a>
    </>
  );
};
export default Buttons;
