import React from "react";
import "./CreateSell.css";

export const CreateSell = () => {
  const elements = [
    {
      id: 1,
      img: require("../../assets/img/image 364.png"),
      title: "Set Up Your Wallet",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, architecto?",
    },
    {
      id: 2,
      img: require("../../assets/img/image 362.png"),
      title: "Create Your Collection",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, aperiam.",
    },
    {
      id: 3,
      img: require("../../assets/img/image 365.png"),
      title: "Add Your NFTs",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit.",
    },
  ];

  return (
    <div className="create-sell">
      <h1 className="big-title-all">Create And Sell Your NFTs</h1>
      <div className="create-sell-main">
        {elements.map((element) => {
          return (
            <div key={element.id} className="create-sell_single-item">
              <img src={element.img} alt="" />
              <p>{element.title}</p>
              <span>{element.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
