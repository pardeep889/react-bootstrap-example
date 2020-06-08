import React, { Component } from "react";
import Header from "../Header/header";

class PageLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
