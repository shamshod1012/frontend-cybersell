import React from "react";
import { SingleTopGal } from "../SingleTopGal/SingleTopGal";
import "./TopGals.css";

export const TopGals = () => {
  const elements = [
    [
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000",
      "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
      "https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000",
    ],
    [
      "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31",
      "https://images.unsplash.com/photo-1656381620321-bddff61435c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmZ0JTIwYXJ0fGVufDB8fDB8fHww&w=1000&q=80",
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg",
    ],
    [
      "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/2021/09/09/2802476-307029214.jpg?itok=3YaIycZz",
      "https://www.cnet.com/a/img/resize/e0ebf3dc974fce8609d2ba49fa36cf0f93190062/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&fit=crop&height=1200&width=1200",
      "https://static01.nyt.com/images/2021/03/11/arts/11nft-explain-1/11nft-explain-1-mediumSquareAt3X.jpg",
    ],
  ];

  return (
    <div className="top-galleries">
      <h1 className="big-title-all">Top Galleries</h1>
      <div className="top-galleries-main">
        {elements.map((element, index) => {
          return <SingleTopGal key={index} element={element} />;
        })}
      </div>
      <button className="gradiented-button">See All</button>
    </div>
  );
};
