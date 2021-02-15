import React, { Component } from "react";
import './container.scss'

export default function Container({ children, customClassName }) {
  return <div className={customClassName}>{children}</div>;
}
