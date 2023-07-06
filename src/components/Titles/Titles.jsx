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
          <p>
            <p className="watch-circle">
              <BsFillPlayFill />
            </p>
            Watch Video
          </p>
        </div>

        <div className="titles-numbers-container">
          <p>
            <h3>80K+</h3>
            Activate user
          </p>
          <p>
            <h3>27K+</h3>
            Artworks
          </p>
          <p>
            <h3>3.5K+</h3>
            Artists
          </p>
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
