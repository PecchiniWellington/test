import React from "react";
import { CustomButton } from "../custom-button/custom-button";

export default function DecrementButton({ decrement }) {
  return (
    <CustomButton onClick={decrement} type='button' buttonStyle={`round-button-circle `} buttonShape={'round-button'}>
      -
    </CustomButton>
  );
}
