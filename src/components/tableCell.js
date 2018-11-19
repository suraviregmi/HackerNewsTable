import React from "react";
import HeaderInfo from "../constants/tableHeader";
import Button from "./button";
import TextSearch from "./textSearch";
import propTypes from "prop-types";

const TableCell = ({
  columns,
  className,
  direction,
  handelBtnClick = f => f,
  ...props
}) => (
  <div className="row">
    {columns.map((col, index) => {
      // console.log("cl and index ", direction[col]);
      return (
        <div key={index} className={className}>
          <p>{(HeaderInfo[col] && HeaderInfo[col].label) || col}</p>
          {className === "table-header-item" && (
            <Button
              handelBtnClick={handelBtnClick}
              id={col}
              content={"^"}
              className={direction[col]}
            />
          )}

          {className === "table-header-item" &&
            HeaderInfo[col].type === "string" && (
              <TextSearch search={props.search} col={col} />
            )}
        </div>
      );
    })}
  </div>
);

TableCell.propTypes = {
  columns: propTypes.array,
  className: propTypes.string,
  handelBtnClick: propTypes.func
};

export default TableCell;
