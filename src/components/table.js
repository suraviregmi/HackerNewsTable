import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";

class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  displayRows(row, index) {
    // console.log("display row", row);
    return <TableRow key={index} details={row} />;
  }

  render() {
    //console.log("in table row ", this.props.data);
    return (
      <div>
        <TableHeader sortBy={this.props.sortBy} search={this.props.search} />
        <div>
          {this.props.data
            .slice(0, this.props.pageSize)
            .map((row, index) => this.displayRows(row, index))}
        </div>
      </div>
    );
  }
}
export default MainTable;
