import React from "react";
import aboutCover from "../assets/images/covers/about.jpg";
import aboutUs from "../assets/images/covers/about1.jpg";
import AboutSlider from '../component/Sliders/aboutSlider';
const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <img className="col-12" src={aboutCover} />
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h3>- ABOUT US -</h3>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 mt-5">
            <h4 className="mt-5">Who We Are?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              tellus ante. Nam suscipit urna risus, fermentum commodo ipsum
              porta id.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, sed porta est consectetur.
              Vestibulum auctor felis eget orci semper vestibulum. Pellentesque
              ultricies nibh gravida, accumsan libero luctus, molestie nunc.
            </p>
          </div>
          <div className="col-md-6 mt-5">
              <img className="col-12" src={aboutUs}/>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <h3>- OUR CUSTOMERS -</h3>
        </div>
        <AboutSlider />
      </div>
    </div>
  );
};
export default About;
