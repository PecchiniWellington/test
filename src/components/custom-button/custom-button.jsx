import React from "react";
import "./custom-button.scss";

export const CustomButton = ({ children, type, onClick, buttonStyle, buttonShape }) => {
  return (
    <div className={buttonShape}>
      <button
        className={buttonStyle}
        onClick={onClick}
        type={type}>
        <div className='center-text'>{children}</div>
      </button>
    </div>
  );
};
