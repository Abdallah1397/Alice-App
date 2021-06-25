import React from "react";
import "./ObjectDetail.scss";
const ObjectDetail = ({ id, image, title, about }) => {
  return (
    <div className="objectDetail">
      <div className="mb-5">
        <div key={id} >
          <div className="objectDetail__image-container">
            <img className="objectDetail__image" height="300px" src={image} />
          </div>
          <div className="objectDetail__container" id="title">
            <h3 className="objectDetail__container-title">{title}</h3>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default ObjectDetail;
