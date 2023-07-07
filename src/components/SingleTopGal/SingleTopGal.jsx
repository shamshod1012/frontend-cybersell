import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./SingleTopGal.css";
export const SingleTopGal = ({ element }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="topgals_single-gal">
      <div className="singleTopGal_img-cont">
        <img className="img-cont_big-image" src={element[current]} alt="" />
        <div>
          {element.map((item, index) => {
            return (
              <img
                onClick={() => {
                  setCurrent(index);
                }}
                className={index === current && "current-small-image"}
                src={item}
                alt={"this is nft"}
              />
            );
          })}
        </div>
      </div>
      <div className="singleTopGal_desc-cont">
        <div className="desc-cont_left">
          <p>Vector Abstract Character</p>
          <span>Gallery</span>
        </div>
        <FaLongArrowAltRight className="single-gal-arrow" size={25} color={"#fff"} />
      </div>
    </div>
  );
};
