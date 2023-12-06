import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const anchor_link_style = `
  color: rgba(0, 0, 0, 1.0);
  &:visited {color:rgba(0, 0, 0, 1.0);};
  &:hover {color:rgba(252, 101, 80, 0.7);};
  &:active {color:#0000FF;};
  &:hover { cursor: pointer };
`;

const WRAPPER = styled.section`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 100px;
  top: 0px;
  width: 100%;
`;

const LOGO_LINK = styled.a`
  ${anchor_link_style}
`;

const LOGO_IMAGE = styled.img`
  max-height: 90px;
  max-width: 100%;
`;

const NAV = styled.nav`
  display: flex;
  margin-right: 150px;
`;

const LI = styled.li`
  list-style-type: none;
  margin-right: 40px;
`;

const BOOKING = styled.a`
  ${anchor_link_style}
  padding-right: 300px;
`;

// eslint-disable-next-line react/prop-types
const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <LI className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </LI>
  );
};

const NavigationComponent = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  const nav_image_link =
    "https://midcitynailschicago.com/uploads/fnail0arlsjpl/attach/thumbnail/1695285774_logo_midcity-nails-in-chicago-il-60614-w576.png";
  const changeNavbarColor = () => {
    if (window.scrollY) {
      setColor(true);
    } else if (window.scrollY < 80) {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <WRAPPER
        style={{ background: color ? "rgba(255, 255, 255, 1.0)" : "rgba(255, 255, 255, 0.7)" }}>
        <LOGO_LINK href="https://imgbb.com/">
          <LOGO_IMAGE src={nav_image_link} alt="example-image" border="0" />
        </LOGO_LINK>
        <NAV>
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/about">ABOUT US</CustomLink>
          <CustomLink to="">SERVICES</CustomLink>
          <CustomLink to="">GALLERY</CustomLink>
          <CustomLink to="">CONTACT US</CustomLink>
        </NAV>
        <BOOKING>Booking</BOOKING>
      </WRAPPER>
    </>
  );
};

export default NavigationComponent;
