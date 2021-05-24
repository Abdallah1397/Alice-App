import React ,{useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../component/footer/footer";
import Navbar from "../component/Navbar/navbar";
import Home from "../pages/home";
import About from "../pages/about";
import OurWork from '../pages/ourWork';
import { FaArrowCircleUp } from "react-icons/fa";
import ScrollToTop from "../utils/scrollToTop";

const All_PAGES = () => {
  // state to scrollTop arrow
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    // to check scroll or not 
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={OurWork} />
        <Route exact path="/about" component={About} />
        <FaArrowCircleUp
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        />
        <Footer />
      </div>
    </Router>
  );
};
export default All_PAGES;
