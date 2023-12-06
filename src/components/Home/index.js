import React from "react";
import styled from "styled-components";

const WRAPPER = styled.section``;

const Home = () => {
  const image_links = [
    "https://midcitynailschicago.com/uploads/fnail0arlsjpl/logo/2023/08/03/fnailnew01-Slide-dreamstime_m_72728653.jpg"
  ];

  return (
    <>
      <WRAPPER>
        <a>
          <img src={image_links[0]} alt="example-image" border="0" />
        </a>
      </WRAPPER>
    </>
  );
};

export default Home;
