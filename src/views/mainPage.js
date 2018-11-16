import React, { Component } from "react";
import MainTable from "../components/table";
import NumberSelector from "../components/numberSelect";
import data from "../data/data.json";

const URL = "https://hacker-news.firebaseio.com/v0/item/";
class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      allStories: [],
      data: data,

      displayData: data,
      pageSize: 1,
      direction: {
        id: "asc",
        score: "asc",
        by: "asc"
      }
    };
  }

  componentWillMount() {
    this.getAllIds();
  }

  async getAllIds() {
    let fetched = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    let result = await fetched.json();
    this.setState({ entries: result.slice(0, result.length) });
    for (let i = 0; i < this.state.entries.length; i++) {
      this.getAllData(this.state.entries[i]);
    }
  }

  async getAllData(id) {
    let fetched = await fetch(URL + id + ".json");
    let result = await fetched.json();
    this.setState({
      allStories: [...this.state.allStories, result]
    });
  }

  getSelectValue = e => {
    console.log("in main page the selected value is ", e);
    this.setState({
      pageSize: e,
      displayData: this.state.data.slice(0, e)
    });
  };

  sortBy = value => {
    //console.log("sort ma value", value);

    this.setState({
      displayData: this.state.data.sort((a, b) => {
        // this.state.direction[value] === "asc"
        //   ? a[value] < b[value]
        //   : b[value] < a[value]

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
    let filteredData = this.state.data.filter(row => {
      //console.log("row", row);
      return row[col].toLowerCase().includes(input);
    });

    this.setState({
      displayData: filteredData
    });
  };

  render() {
    // console.log("in main page js ", this.state.data);
    return (
      <div className="MainPage">
        <NumberSelector getSelectValue={this.getSelectValue} />
        <MainTable
          data={this.state.displayData}
          pageSize={this.state.pageSize}
          sortBy={this.sortBy}
          search={this.search}
        />
      </div>
    );
  }
}

export default MainPage;
