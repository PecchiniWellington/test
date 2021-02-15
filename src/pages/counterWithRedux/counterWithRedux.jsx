import React, { Component } from "react";
import "./counterWithRedux.scss";

import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  resetAction,
  showToastAction,
  hideToastAction,
} from "../../store/counter/counter.actions";

import Container from "../../components/container/container";
import CurrentValue from "../../components/current-value/current-value";
import DecrementButton from "../../components/decrement-button/decrement-button";
import IncrementButton from "../../components/increment-button/increment-button";
import ResetButton from "../../components/reset-button/reset-button";
import { Toast } from "../../components/toast/toast";

class CounterWithRedux extends Component {
  constructor() {
    super();
  }
  render() {
    const colorNumber = (num) => {
      if (num % 2) {
        return "odd";
      } else if (num === 0) {
        return "";
      } else {
        return "even";
      }
    };
    const onDecrementCounter = () => {
      setTimeout(
        () => this.props.hideToast(),
        5000
      );
      this.props.decreaseCounter();
    }
    return (
      <Container customClassName='counterClass'>
        <h1>Counter With Redux</h1>
        <CurrentValue customClass={colorNumber(this.props.count)}>{this.props.count}</CurrentValue>
        <div className='buttonsContainer'>
          <DecrementButton decrement={onDecrementCounter} />
          <IncrementButton increment={this.props.increaseCounter} />
          {<ResetButton reset={this.props.reserCounter} />}
        </div>
        <Toast showToast={this.props.showToastProp}>Il valore non può essere minore di 0</Toast>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    showToastProp: state.counter.showToast
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(incrementAction()),
    decreaseCounter: () => dispatch(decrementAction()),
    reserCounter: () => dispatch(resetAction()),
    hideToast: () => dispatch(hideToastAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithRedux);
