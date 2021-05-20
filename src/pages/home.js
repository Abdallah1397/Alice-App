import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCategoriesRequest } from "../store/actions/categories";
import {getAllBestSalesRequest} from '../store/actions/bestsales'
import cover from "../assets/images/covers/Capture.PNG";
import Banner from "../component/Banner/Banner";
import Content from "../component/Content/content";
import Hero from "../component/Hero/hero";
import Title from "../component/Title/Title";
import ObjectDetail from "../component/ObjectDetails/ObjectDetail";
import MostWork from "../component/Sliders/workSlider";


const Home = ({ categories, getCategories,bestsales,getBestSales }) => {
  useEffect(() => {
    getCategories();
    getBestSales();
  }, []);
  const categoryDisplay = categories.map((item) => {
    return (
      <div className="col-md-3 col-12 mt-md-5">
        {categories ? <ObjectDetail image={item.image} key={item.id} /> : ""}
      </div>
    );
  });

  // BestSales 
  const bestSalesDisplay = bestsales.map((item) => {
    return (
      <div className="col-md-3 col-12 mt-md-5">
        {bestsales ? <ObjectDetail image={item.image} key={item.id} /> : ""}
      </div>
    );
  });
  return (
    <div>
      <Banner image={cover} />
      <Content
        title="ALLOW EVERY TO SHINE IN STYLE"
        topic=" We believe that beauty and confidence come from within. What you wear
              on the outside is just a way to add to that beauty and confidence and
              to express who you really are. We go to work every day with influences
              from all over the world to help everyone have access to this boost of
              self-confidence and shine with their very own style. Safira's destiny
              is a reason to be and a reason to go to work every day. If selling
              “need it now” jewellery is what we do, our purpose is why we do it. So
              our destination is not necessarily where we are today, but a guiding
              star for where we want to go."
      />
      <Title
        title="BROWSE OUR CATEGORIES
      "
      />
      <div className="container">
        <div className="row">{categoryDisplay}</div>
      </div>
      <Hero
        title="Hurry up to receive all new"
        showButton={false}
      />
      <Title title="Best SELLING"/>
      <div className="container">
      <div className="row">{bestSalesDisplay}</div>
    </div>

    </div>
  );
};
const mapStateToProps = (state) => ({
  categories: state.allCategories.categories,
  bestsales:state.allBestSales.bestsales,
});
const mapDispatchToProps = {
  getCategories: getAllCategoriesRequest,
  getBestSales:getAllBestSalesRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
