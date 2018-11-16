import React from "react";
import Button from "./button";
import TextSearch from "./textSearch";

let TableHeader = props => {
  return (
    <div className="table-header">
      <div className="table-header-item">
        ID <Button sortBy={props.sortBy} key="id" col="id" />
      </div>
      <div className="table-header-item">
        BY <Button sortBy={props.sortBy} key="by" col="by" />
      </div>
      <div className="table-header-item">
        SCORE <Button sortBy={props.sortBy} key="score" col="score" />
      </div>
      <div className="table-header-item">
        <Button sortBy={props.sortBy} key="type" col="type" />
        TYPE
        <TextSearch search={props.search} col="type" />
      </div>
      <div className="table-header-item title-cell">
        <Button sortBy={props.sortBy} key="title" col="title" />
        TITLE
        <TextSearch search={props.search} col="title" />
      </div>
    </div>
  );
};

export default TableHeader;
