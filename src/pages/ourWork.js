import React from "react";
import cover from "../assets/images/covers/jtv.jpg";
import MostWork from '../component/Sliders/workSlider';
const OurWork = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <img src={cover} className="col-12" />
      </div>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <button className="col-5  p-sm-3"> FIND MORE CATEGORIES </button>
          <input
            className="col-5 ml-1 p-sm-3"
            type="search"
            placeholder="SEARCH MORE CATEGORIES"
          />
        </div>
        <div className="row mt-5 justify-content-center">
          <h4> - NEW COLLECTION -</h4>
        </div>
        <div className="row">
            <MostWork/>
        </div>
      </div>
    </div>
  );
};
export default OurWork;
