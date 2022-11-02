import React, { Component } from "react";
import NewsItem from "./newsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">News Dose- Top Headlines </h1>
        <div className="row my-5">
          <div className="col-md-3 mx-3">
            <NewsItem />
            </div>
            <div className="col-md-3 mx-3">
            <NewsItem />
            </div>
            <div className="col-md-3 mx-3">
            <NewsItem />
            </div>
        </div>
      </div>
    );
  }
}

export default News;
