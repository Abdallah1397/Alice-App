import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AS from "../../assets/images/gallery/Earrings/ear1.jpg";

const AboutSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      <section className="py-5">
        <div className="container pb-5">
          <Slider {...settings}>
            <div className="">
              <h3 className="">title</h3>
              <div className="">
                <img src={AS} className="col-12" />
              </div>
              <p className="">
                “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque ”
              </p>
              <p className="">name</p>
              <p className="">customer</p>
            </div>

            <div className="">
              <h3 className="">title</h3>
              <div className="">
                <img src={AS} className="col-12" />
              </div>
              <p className="">
                “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque ”
              </p>
              <p className="">name</p>
              <p className="">customer</p>
            </div>

            <div className="">
              <h3 className="">title</h3>
              <div className="">
                <img src={AS} className="col-12" />
              </div>
              <p className="">
                “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque ”
              </p>
              <p className="">name</p>
              <p className="">customer</p>
            </div>
            <div className="">
              <h3 className="">title</h3>
              <div className="">
                <img src={AS} className="col-12" />
              </div>
              <p className="">
                “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque ”
              </p>
              <p className="">name</p>
              <p className="">customer</p>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};
export default AboutSlider;
