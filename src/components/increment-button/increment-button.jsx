import React from "react";
import { CustomButton } from "../custom-button/custom-button";

export default function IncrementButton({ increment }) {
  return (
    <CustomButton
      onClick={increment}
      type='button'
      buttonStyle={"round-button-circle"}
      buttonShape={"round-button"}>
      +
    </CustomButton>
  );
}
