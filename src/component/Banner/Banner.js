import React from 'react';
import './Banner.scss';

// Cover Image for any Static Page
const Banner=({image})=>{
    return(
    <div
    style={{backgroundImage:`url(${image})`}} className="about-banner
    "></div>
    )
}
export default Banner;