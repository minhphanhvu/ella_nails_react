import React from "react";
import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const WRAPPER = styled.section`
  display: flex;
`;

const LOGO_LINK = styled.a`
`;

const LOGO_IMAGE = styled.img`
`;

const NAV = styled.nav`
`;

const BOOKING = styled.a`
`;

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

const NavigationComponent = () => {
  return (
    <>
      <WRAPPER>
        <LOGO_LINK href="https://imgbb.com/">
          <LOGO_IMAGE
            src="https://i.ibb.co/V9YtKFr/example-image.png"
            alt="example-image"
            border="0"
          />
        </LOGO_LINK>
        <NAV className="nav">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </NAV>
        <BOOKING />
      </WRAPPER>
    </>
  );
};

export default NavigationComponent;
