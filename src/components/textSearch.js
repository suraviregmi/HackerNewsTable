import React, { Component } from "react";
import propTypes from "prop-types";

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
    //console.log("in tejt safdgsfhgg", this.props);
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

TextSearch.propTypes = {
  col: propTypes.string,
  search: propTypes.func
};

export default TextSearch;
