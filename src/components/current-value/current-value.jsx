import React from "react";
import './current-value.scss';

export default function CurrentValue({ children, customClass }) {
  return <div className={customClass}>{children}</div>;
}
