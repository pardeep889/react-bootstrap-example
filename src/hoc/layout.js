import React, { Component } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

class PageLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default PageLayout;
