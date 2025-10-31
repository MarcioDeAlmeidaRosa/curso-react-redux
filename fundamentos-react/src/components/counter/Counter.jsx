import "./Counter.css";
import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     number: 0,
  //   };
  //   state = {
  //     number: this.props.initialNumber,
  //   };
  constructor(props) {
    super(props);

    this.state = {
      number: props.initialNumber || 0,
      step: props.step || 2,
    };

    //doing the binding with ref add that exists in inital context
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.setStep = this.setStep.bind(this);
  }

  add() {
    this.setState({
      number: this.state.number + this.state.step,
    });
  }

  subtract() {
    this.setState({
      number: this.state.number - this.state.step,
    });
  }

  // Another way to handle this is by using an arrow function, which automatically binds the context
  //   add = () => {
  //     this.setState({
  //       number: this.state.number + 1,
  //     });
  //   };

  setStep(event) {
    this.setState({
      step: +event.target.value,
    });
  }

  render() {
    return (
      <div className="Counter">
        <l2>Counter</l2>
        {/* <p>Initial value: {this.props.initialNumber}</p> */}
        <p>Initial value: {this.state.number}</p>
        <div>
          <label htmlFor="inputStep">Step:</label>
          <input
            id="inputStep"
            type="number"
            value={this.state.step}
            onChange={this.setStep}
          ></input>
        </div>
        <button onClick={this.add}>+</button>
        {/* <button onClick={e=> this.add()}>+</button> */}
        {/* <button onClick={_=> this.add()}>+</button> */}
        <button onClick={this.subtract}>-</button>
      </div>
    );
  }
}

export default Counter;
