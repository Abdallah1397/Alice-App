import React from "react";
import fb from "../../assets/images/social/fb.png";
import insta from "../../assets/images/social/insta.png";

const Footer = () => {
  return (
    <div className="container-fluid">
    <section className="row p-5 footer-sec">
    <footer className="container">
      <div className="row align-items-center">
        <div className="col-sm-11 col-12">
          <h5 className="col p_header">Hurry up to receive all new</h5>
          <p className="col p_footer">
            Never hesitate to <span className="footer_span">FOLLOW US</span>
          </p>
        </div>
        <div div className="col-sm-1 col-12">
          <div className="row">
            <a
              href="https://www.instagram.com/alice_accessories13/"
              target="_blank"
              div
              className="col-sm-12 col-2 m-2"
            >
              <img src={insta} />
            </a>
            <a
              href="https://www.facebook.com/nancyelgarawany"
              target="_blank"
              div
              className="col-sm-12 col-2 m-2"
            >
              <img src={fb} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </section>
    </div>
  );
};
export default Footer;
