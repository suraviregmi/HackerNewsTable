import React, { Component } from "react";

class TextSearch extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ""
    };
  }

  handelChange = e => {
    this.setState(
      {
        inputVal: e.target.value
      },
      () => {
        this.props.search(this.props.col, this.state.inputVal);
      }
    );
  };
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handelChange}
        />
      </form>
    );
  }
}

export default TextSearch;
