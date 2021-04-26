import React from "react";
import Slider from "react-slick";
import armand2 from "../../assets/images/gallery/Armand/armand2.jpg";
import arm14 from "../../assets/images/gallery/Armand/arm14.jpg";
import neck15 from "../../assets/images/gallery/Necklaces/neck15.jpg";
import neck19 from "../../assets/images/gallery/Necklaces/neck19.jpg";
import neck20 from "../../assets/images/gallery/Necklaces/neck20.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const MostWantedSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
  };
  return (
    <section className="py-5 section-bg col-md-12 col-sm-4">
    <div className="container">
      <Slider {...settings}>
        <div className="col-12">
          <img className="col-12" src={armand2}  />
        </div>
        <div className="col-12">
          <img className="col-12 slid_img" src={neck15}  />
        </div>      
        <div className="col-12">
          <img className="col-12 slid_img" src={neck20}  />
        </div>
        <div className="col-12">
          <img className="col-12 slid_img" src={arm14}  />
        </div>
        <div className="col-12">
          <img className="col-12 slid_img" src={neck19}  />
        </div>
       
      </Slider>
    </div>
  </section>
  );
};
export default MostWantedSlider;
