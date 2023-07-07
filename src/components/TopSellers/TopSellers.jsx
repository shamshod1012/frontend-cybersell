import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./TopSellers.css";

export const TopSellers = () => {
  const users = [
    {
      image:
        "https://icon2.cleanpng.com/20180319/vwq/kisspng-computer-icons-user-profile-avatar-profile-transparent-png-5ab03f3dba6729.3105587215214999657635.jpg",
      works: 29,
      name: "selena Gomez",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20210921/ourlarge/pngtree-flat-people-profile-icon-png-png-image_3947764.png",
      works: 66,
      name: "john red",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/5/Profile-Female.png",

      works: 34,
      name: "susan ashli",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
      works: 12,
      name: "alex Molkov",
    },
    {
      image:
        "https://www.pngmart.com/files/10/User-Account-Person-PNG-Transparent-Image.png",
      works: 65,
      name: "jonson dean",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png",
      works: 98,
      name: "addams dans",
    },
  ];

  return (
    <div className="top-sellers">
      <h1 className="big-title-all">Top Sellers</h1>
      <div className="top-sellers-all">
        <span className="single-icon">
          <AiOutlineArrowLeft size={20} color={"#fff"} />
        </span>
        <div className="top-sellers-main">
          {users.map((user) => {
            return (
              <div className="single-seller">
                <div className="img-single-seller">
                  <img src={user.image} alt={user.name} />
                </div>
                <div className="single-seller_desc-cont">
                  <p>{user.name}</p>
                  <span>{user.works} ArtWorks</span>
                </div>
              </div>
            );
          })}
        </div>

        <span className="single-icon">
          <AiOutlineArrowRight size={20} color={"#fff"} />
        </span>
      </div>
    </div>
  );
};
