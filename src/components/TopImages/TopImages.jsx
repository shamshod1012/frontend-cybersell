import React, { useState, useRef, useEffect } from "react";
import { SingleImage } from "../SingleImage";
import { motion } from "framer-motion";
import "./topImages.css";

export const TopImages = () => {
  const [width, setWidth] = useState(0);
  const images = [
    {
      id: 1,
      img: "https://www.spot.uz/media/img/2022/04/pjXQH916492512110620_l.jpg",
      views: 14.324,
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1313353553/photo/concept-cryptographic-nft-on-a-hundred-dollar-bill-franklin-in-glasses.jpg?s=612x612&w=0&k=20&c=DvL35r6GgocA8bCG7kqW0WUtOFV3BKtQp95YVKnSElQ=",
      views: 10.852,
    },
    {
      id: 3,
      img: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2021/09/09/2802471-1141576147.jpg?itok=iBUxiaoP",
      views: 41.334,
    },
    {
      id: 4,
      img: "https://static.ffx.io/images/$zoom_1.3244%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_281/t_crop_custom/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
      views: 19.039,
    },
    {
      id: 5,
      img: "https://ignitewebstudios.com/assets/images/nft-images/about-service-img.png",
      views: 19.213,
    },
    {
      id: 6,
      img: "https://www.protocol.com/media-library/golden-ape.png?id=29865430&width=1245&height=700&quality=85&coordinates=0%2C39%2C0%2C40",
      views: 19.453,
    },
    {
      id: 7,
      img: "https://nftnow.com/wp-content/uploads/2022/02/Doodles-Guide-Feature-Image.png",
      views: 34.213,
    },
  ];
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="top-images">
      <header>
        <h2>Learn History</h2>
        <p className="top-images_small-title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
        </p>
        <button className="topimages_button">See more</button>
      </header>
      <motion.main ref={carousel} className="top-images_main">
        <motion.div
          dragConstraints={{ right: 0, left: -width }}
          drag="x"
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          {images.map(({ id, img, views }) => {
            return <SingleImage key={id} id={id} img={img} views={views} />;
          })}
        </motion.div>
      </motion.main>
    </div>
  );
};
