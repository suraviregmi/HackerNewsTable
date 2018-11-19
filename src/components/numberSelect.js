import React, { Component } from "react";
import propTypes from "prop-types";

const ten = 2,
  twenty = 6,
  thirty = 8;

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

NumberSelector.propTypes = {
  getSelectValue: propTypes.func
};
export default NumberSelector;
