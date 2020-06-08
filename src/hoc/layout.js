import React, { Component } from "react";
import Header from "../Header/header";

class PageLayout extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        {this.props.children}
      </>
    );
  }
}

export default PageLayout;
