import React from "react";

let TableRow = props => {
  //console.log("in row ", props.details.by);
  return (
    <div className="row">
      <div className="row-item">{props.details.id}</div>
      <div className="row-item">{props.details.by}</div>
      <div className="row-item">{props.details.score}</div>
      <div className="row-item">{props.details.type}</div>
      <div className="row-item title-cell">{props.details.title}</div>
    </div>
  );
};

export default TableRow;
