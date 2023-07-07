import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import "./SingleImage.css";

export const SingleImage = ({ id, img, views }) => {
  return (
    <div key={id} className="single-top-image">
      <img src={img} alt="" />
      <div>
        <AiOutlineEye />
        <span>{views} views</span>
      </div>
    </div>
  );
};
