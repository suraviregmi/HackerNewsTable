import React, { Component } from "react";
import MainTable from "../components/table";
import NumberSelector from "../components/numberSelect";
import data from "../data/newData.json";
import Pagination from "../components/pagination";

const ten = 2;

//const URL = "https://hacker-news.firebaseio.com/v0/item/";
class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      //for API hackernews
      entries: [],
      allStories: [],

      //for given data
      currentPage: 1,
      pageSize: ten,
      noOfPages: data.length / ten,
      lastEntry: ten,

      data: data,
      displayData: data.slice(0, ten),

      direction: {
        org_name: "desc",
        revreview_count: "desc",
        missing_count: "desc",
        inrevreview_count: "desc",
        clientreview_count: "desc",
        billable_count: "desc",
        billable_aged_count: "desc",
        internal_review_count: "desc",
        invoiced_count: "desc",
        timely_count: "desc",
        cust_rejected_count: "desc",
        cleanup_count: "desc",
        posted_count: "desc",
        posted_aged_count: "desc",
        posted_nfa_count: "desc",
        billed_nfa_count: "desc",
        acu_rejected_count: "desc"
      }
    };
  }

  // componentWillMount() {
  //   this.getAllIds();
  // }

  // async getAllIds() {
  //   let fetched = await fetch(
  //     "https://hacker-news.firebaseio.com/v0/topstories.json"
  //   );
  //   let result = await fetched.json();
  //   this.setState({ entries: result.slice(0, result.length) });
  //   for (let i = 0; i < 50; i++) {
  //     this.getAllData(this.state.entries[i]);
  //   }
  // }

  // async getAllData(id) {
  //   let fetched = await fetch(URL + id + ".json");
  //   let result = await fetched.json();
  //   this.setState({
  //     allStories: [...this.state.allStories, result]
  //   });
  // }

  getSelectValue = e => {
    //console.log("in main page the selected value is ", e);
    this.setState({
      pageSize: e,
      currentPage: 1,
      noOfPages: this.state.data.length / e + 1,
      displayData: this.state.data.slice(0, e)
    });
  };

  sortBy = value => {
    //console.log("sort ma value", value);

    this.setState({
      displayData: this.state.displayData.sort((a, b) => {
        const asc = this.state.direction[value] === "asc";

        if (asc) {
          if (a[value] < b[value]) return 1;
          return -1;
        }

        if (a[value] < b[value]) return -1;
        return 1;
      }),
      direction: {
        [value]: this.state.direction[value] === "asc" ? "desc" : "asc"
      }
    });
  };

  search = (col, input) => {
    // console.log("col input", col, input);
    let filteredData = this.state.data.filter(row => {
      return row[col].toLowerCase().includes(input);
    });
    //console.log("filtered data ", filteredData);

    this.setState({
      displayData: filteredData
    });
    // console.log(this.state.displayData);
  };
  paginationBtnClick = i => {
    // console.log("pageNO", i);

    const upperLimit = this.state.pageSize * i;

    //console.log("upperlimit", upperLimit);
    this.setState({
      currentPage: i,
      displayData: data.slice(upperLimit - this.state.pageSize, upperLimit)
    });
  };
  sortData = data => {
    return data.slice(0, 5);
  };

  render() {
    // const sortedData = this.sortData(this.state.data);
    // console.log("sorted DAta", sortedData);
    // const sortedData = this.sortBy(value,  this.state.data);
    //const searchData = this.search('name', this.state.query, sortedData);
    // console.log("all Stories", this.state.data);
    return (
      <div>
        <div className="MainPage">
          <NumberSelector getSelectValue={this.getSelectValue} />

          <Pagination
            currentPage={this.state.currentPage}
            noOfPages={this.state.noOfPages}
            handelBtnClick={this.paginationBtnClick}
          />

          <MainTable
            direction={this.state.direction}
            handelBtnClick={this.sortBy}
            data={this.state.displayData}
            pageSize={this.state.pageSize}
            search={this.search}
            singleData={this.state.data[0]}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
