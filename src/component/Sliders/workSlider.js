import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import best1 from '../../assets/images/gallery/Our Work/best1.jpg';
import best2 from '../../assets/images/gallery/Our Work/best2.jpg';
import best3 from '../../assets/images/gallery/Our Work/best3.jpg';
import med2 from '../../assets/images/gallery/Our Work/2.jpg';
import arm3 from '../../assets/images/gallery/Our Work/arm3.jpg';
import arm4 from '../../assets/images/gallery/Our Work/arm4.jpg';



const MostWork =()=>{
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
              <img className="col-12 slid_img" src={best1}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img" src={arm4}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img" src={best3}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img" src={arm3}  />
            </div>
            <div className="col-12">
              <img className="col-12 slid_img" src={best2}  />
            </div>
           
           
          </Slider>
        </div>
      </section>
      );
    };
export default MostWork;