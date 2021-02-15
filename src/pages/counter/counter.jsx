import React, { Component } from "react";
import "./counter.scss";

import Container from "../../components/container/container";
import CurrentValue from "../../components/current-value/current-value";
import DecrementButton from "../../components/decrement-button/decrement-button";
import IncrementButton from "../../components/increment-button/increment-button";
import ResetButton from "../../components/reset-button/reset-button";
import { Toast } from "../../components/toast/toast";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      showToast: "",
    };
  }

  componentDidMount() {
    this.timer = setTimeout(
      () => this.setState((prevState) => ({ ...this.state, showToast: "" })),
      6000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { value } = this.state;
    const onDecrement = () => {
      if (value <= 0) {
        showToastFN(value);
      } else {
        this.setState({
          value: value - 1,
        });
      }
    };
    const onIncrement = () => {
      this.setState({
        value: value + 1,
      });
    };
    const onReset = () => {
      this.setState({
        value: 0,
      });
    };

    const colorNumber = (num) => {
      if (num % 2) {
        return "odd";
      } else if (num === 0) {
        return "";
      } else {
        return "even";
      }
    };

    const showToastFN = (val) => {
      if (val <= 0) {
        this.setState({
          ...this.state,
          showToast: "show",
        });
      }
    };

    return (
      <Container customClassName='counterClass'>
        <h1>Counter</h1>
        <CurrentValue customClass={colorNumber(value)}>{value}</CurrentValue>
        <div className='buttonsContainer'>
          <DecrementButton decrement={onDecrement} />
          <IncrementButton increment={onIncrement} />
          <ResetButton reset={onReset} />
        </div>
        <Toast showToast={this.state.showToast}>
          Il valore non può essere minore di 0
        </Toast>
      </Container>
    );
  }
}
