import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../component/footer/footer";
import Navbar from "../component/Navbar/navbar";
import Home from "../pages/home";
import About from "../pages/about";
import OurWork from '../pages/ourWork';
const All_PAGES = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={OurWork} />
        <Route exact path="/about" component={About} />

        <Footer />
      </div>
    </Router>
  );
};
export default All_PAGES;
