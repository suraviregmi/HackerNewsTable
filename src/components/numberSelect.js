import React, { Component } from "react";

const ten = 1,
  twenty = 3,
  thirty = 5;

class NumberSelector extends Component {
  constructor() {
    super();
    this.state = {
      value: { ten }
    };
  }

  handelChange = e => {
    this.setState(
      {
        value: e.target.value
      },
      () => {
        this.props.getSelectValue(this.state.value);
      }
    );
  };

  render() {
    return (
      <form>
        <select value={this.state.value} onChange={this.handelChange}>
          <option value={ten}>{ten}</option>
          <option value={twenty}>{twenty}</option>
          <option value={thirty}>{thirty}</option>
        </select>
      </form>
    );
  }
}

export default NumberSelector;
