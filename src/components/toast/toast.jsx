import React from "react";
import './toast.scss'

export const Toast = ({showToast, children}) => {
  return (
    <div id='toast' className={showToast}>
      <div id='img'>Alert</div>
      <div id='desc'>{children}</div>
    </div>
  );
};
