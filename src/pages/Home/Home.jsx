import React from "react";
import { Header, Wrapper, Titles, TopImages } from "../../components/";
export const Home = () => {
  return (
    <div className="home">
      <Wrapper>
        <Header />
        <Titles />
        <TopImages />
      </Wrapper>
    </div>
  );
};
