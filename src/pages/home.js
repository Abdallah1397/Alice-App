import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCategoriesRequest } from "../store/actions/categories";
import cover from "../assets/images/covers/Capture.PNG";
import MostWork from '../component/Sliders/workSlider';
const Home = ({ categories, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, []);
  const categoryDisplay = categories.map((item) => {
    return (
      <img src={item.image} key={item.id} className="col-md-3 col-6 mt-1" />
    );
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <img src={cover} className="col-12" />
      </div>
      <div className="container">
      <div className="row">{categoryDisplay}</div>
      <section className="container-fluid allowShine_div">
        <div className="row p-5">
        <div className="row justify-content-md-end mt-5 ">
        <h3 className="col-md-9 col-12 mt-2 ml-2 allawShine_h1">
          ALLOW EVERY TO SHINE IN STYLE
        </h3>
        <p className="col-12 mt-3">
          We believe that beauty and confidence come from within. What you wear
          on the outside is just a way to add to that beauty and confidence and
          to express who you really are. We go to work every day with influences
          from all over the world to help everyone have access to this boost of
          self-confidence and shine with their very own style. Safira's destiny
          is a reason to be and a reason to go to work every day. If selling
          “need it now” jewellery is what we do, our purpose is why we do it. So
          our destination is not necessarily where we are today, but a guiding
          star for where we want to go.
        </p>
      </div>
      </div>
      </section>
      <div className="row justify-content-center mt-5">
        <h3 className="mostWantedHeader"> - NEW COLLECTION - </h3>
        <MostWork />       
      </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  categories: state.allCategories.categories,
});
const mapDispatchToProps = {
  getCategories: getAllCategoriesRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
