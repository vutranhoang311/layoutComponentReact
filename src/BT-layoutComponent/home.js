import React, { Component } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./nav";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
