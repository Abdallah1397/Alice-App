import React from "react";
import "./ObjectDetail.scss";
const ObjectDetail = ({ id, image, title, about }) => {
  return (
    <div className="objectDetail">
      <div className="mb-5">
        <div key={id} >
          <div className="objectDetail__image-container">
            <img className="objectDetail__image" width="200px" height="300px" src={image} />
          </div>
          <div className="objectDetail__container">
            <h3 className="objectDetail__container-title">{title}</h3>
            <p className="objectDetail__container-about  mb-5">{about}</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default ObjectDetail;
