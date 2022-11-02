import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ichef.bbci.co.uk/news/1024/branded_news/13489/production/_127458987_a8306760c8e83ba715777272427c0f849657e6680_0_5472_36481000x667.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
