
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./hero.scss";

// hero component that appear in a fixed image and take a title above it
const Hero = ({ title, subTitle,showButton }) => {
    return (
      <section className="hero mt-5">
        <article className="hero__article">
          <h3 className="hero__title">
          <span className="hero__titleSpan">
  
            <BsStar className="hero__Bstar" />
            <span>{title}</span>
            <BsStar className="hero__Bstar" />
            </span>
          </h3>
          <p className="hero__paragraph">{subTitle}</p>
          <Link to="/work" className="btn btn-grey" hidden={showButton}>
            discover now
          </Link>
        </article>
      </section>
    );
  };
  export default Hero;