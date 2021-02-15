import React from "react";
import { CustomButton } from "../custom-button/custom-button";

export default function ResetButton({ reset }) {
  return (
    <CustomButton
      onClick={reset}
      type='button'
      buttonStyle={`round-button-circle`}
      buttonShape={"round-button"}>
      Reset
    </CustomButton>
  );
}
