import React, { Component } from "react";
import TableCell from "./tableCell";
import propTypes from "prop-types";

class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("in table row ", this.props);
    return (
      <div>
        <div>
          <TableCell
            columns={Object.keys(this.props.singleData)}
            className="table-header-item"
            handelBtnClick={this.props.handelBtnClick}
            search={this.props.search}
          />
        </div>
        {this.props.data.length === 0 ? (
          <div />
        ) : (
          <div>
            {this.props.data.map((row, index) => (
              <TableCell
                columns={Object.values(row)}
                key={index}
                className={"table-body-item"}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

MainTable.propTypes = {
  singleData: propTypes.object,
  handelBtnClick: propTypes.func,
  search: propTypes.func,
  data: propTypes.array
};
export default MainTable;
