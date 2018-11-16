import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      up: true
    };
  }
  changeClassName = () => {
    this.setState({ up: !this.state.up });
  };
  render() {
    return (
      <button
        className={this.state.up ? "ascending" : "descending"}
        onClick={e => {
          this.changeClassName();
          return this.props.sortBy(this.props.col, e);
        }}
      >
        ^
      </button>
    );
  }
}

export default Button;
