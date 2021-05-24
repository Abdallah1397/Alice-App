import React from "react";
import aboutCover from "../assets/images/covers/coverJewelry.png";
import aboutUs from "../assets/images/covers/about1.jpg";
import Banner from "../component/Banner/Banner";
import AboutSlider from '../component/Sliders/aboutSlider';
import Title from "../component/Title/Title";
import Hero from "../component/Hero/hero";
import Content from "../component/Content/content";
import Condtions from "../component/Condttions/condtiond";
const About = () => {
  return (
    <div >
      <Banner image={aboutCover} /> 
      <Content title="Who We Are"
      topic="We believe that beauty and confidence come from within. What you wear
      on the outside is just a way to add to that beauty and confidence and
      to express who you really are. We go to work every day with influences
      from all over the world to help everyone have access to this boost of
      self-confidence and shine with their very own style. Safira's destiny
      is a reason to be and a reason to go to work every day. If selling
      “need it now” jewellery is what we do, our purpose is why we do it. So
      our destination is not necessarily where we are today, but a guiding
      star for where we want to go." />
      <Title title="You Can Order"/>
      <Condtions />
      <Hero title="Alice Accessories"/>
    </div>
  );
};
export default About;
