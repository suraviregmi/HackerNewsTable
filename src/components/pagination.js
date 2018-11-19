import React, { Component } from "react";
import Button from "./button";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    console.log(this.props);
    let a = [];
    for (let i = 1; i <= this.props.noOfPages; i++) {
      if (i === this.props.currentPage) {
        console.log("current page is ", i);
        a.push(
          <Button
            content={i}
            key={i}
            id={i}
            className="activePage"
            handelBtnClick={this.props.handelBtnClick}
          />
        );
      } else {
        a.push(
          <Button
            content={i}
            key={i}
            id={i}
            className="inactivePage"
            handelBtnClick={this.props.handelBtnClick}
          />
        );
      }
    }
    return <div>{a}</div>;
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  noOfPages: PropTypes.number,
  handelBtnClick: PropTypes.func
};

export default Pagination;
