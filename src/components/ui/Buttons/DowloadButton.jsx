import React from "react";
import "./Button.css"; 
import { ArrowDownToLine } from "lucide-react";

const DowloadButton = ({ label, icon, color = "#7808d0", file }) => {
  return (
    <a
      href={file}
      download
      className="button"
      style={{ "--clr": color }}
    >
      <span className="button__icon-wrapper">

        <span className="button__icon-svg">
        {icon}
        </span>
        <span className="button__icon-svg button__icon-svg--copy" >
        {icon}
        </span>

      </span>
      {label}
    </a>
  );
};

export default DowloadButton;
