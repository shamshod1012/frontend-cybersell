import React from "react";
import nft from "../../assets/img/nft (1) 1.png";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img src={nft} alt="logo karoche" />
        <p>NFTs</p>
      </div>
      <div className="header-right">
        <div className="header-right_first">
          <span>Home</span>
          <span>Market</span>
          <span>Artists</span>
          <span>Community</span>
          <span>Wallet</span>
        </div>
        <div className="header-right_second">
          <span>Login</span>
          <button className="gradiented-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
};
