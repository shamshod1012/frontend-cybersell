import React from "react";
import {
  Header,
  Wrapper,
  CreateSell,
  Titles,
  TopImages,
  TopGals,
  TopSellers,
  Blogs,
  Footer,
} from "../../components/";
export const Home = () => {
  return (
    <div className="home">
      <Wrapper>
        <Header />
        <Titles />
        <TopImages />
        <CreateSell />
        <TopGals />
        <TopSellers />
        <Blogs />
        <Footer />
      </Wrapper>
    </div>
  );
};
