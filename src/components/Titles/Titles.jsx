import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

import "./Titles.css";

export const Titles = () => {
  return (
    <main className="titles-main">
      <div className="titles  titles-left">
        <h1>
          Buy And Sell Digital Art,
          <span> NFT </span> collection
        </h1>
        <p className="small-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          laboriosam expedita corporis quo voluptate?Lorem ipsum dolor sit amet.
        </p>
        <div className="title-buttons">
          <button className="gradiented-button">Explore</button>
          <div>
            <div className="watch-circle">
              <BsFillPlayFill />
            </div>
            Watch Video
          </div>
        </div>

        <div className="titles-numbers-container">
          <div>
            <h3>80K+</h3>
            Activate user
          </div>
          <div>
            <h3>27K+</h3>
            Artworks
          </div>
          <div>
            <h3>3.5K+</h3>
            Artists
          </div>
        </div>
      </div>
      <div className="titles titles-right">
        <img
          src={require("../../assets/img/Rectangle 111.png")}
          alt="gold skull"
          className="titles_gold-skull"
        />
        <img
          src={require("../../assets/img/Rectangle 112.png")}
          alt="bones"
          className="titles_bones"
        />
        <img
          src={require("../../assets/img/image 113.png")}
          alt="cat"
          className="titles_cat"
        />
        <img
          src={require("../../assets/img/Rectangle 114.png")}
          alt="head"
          className="titles_head"
        />
      </div>
    </main>
  );
};
