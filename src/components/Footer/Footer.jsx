import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoTelegram,
} from "react-icons/bi";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-all">
      <div>
        <h3>Newsletter</h3>
        <p className="footer-small-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sed?
        </p>
        <div className="footer-button">
          <p>
            <BiLogoFacebook />
          </p>
          <p>
            <BiLogoTwitter />
          </p>
          <p>
            <BiLogoInstagram />
          </p>
        </div>
      </div>
      <div>
        <h3>Marketplace</h3>
        <span className="footer-small-text second-small-text">All NFTs</span>
        <span className="footer-small-text second-small-text">Art</span>
        <span className="footer-small-text second-small-text">Music</span>
        <span className="footer-small-text second-small-text">
          Domain names
        </span>
      </div>
      <div>
        <h3>Resources</h3>
        <span className="footer-small-text second-small-text">Home</span>
        <span className="footer-small-text second-small-text">Partners</span>
        <span className="footer-small-text second-small-text">Suggestion</span>
        <span className="footer-small-text second-small-text">Discord</span>
      </div>
      <div>
        <h3>Join Our Newsletter</h3>
        <span className="footer-small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.Lorem
          ipsum dolor sit amet, consectetur.
        </span>
        <div className="input-button-container">
          <input type="text" placeholder="Enter Email" />
          <button>
            <BiLogoTelegram />
          </button>
        </div>
      </div>
    </footer>
  );
};
