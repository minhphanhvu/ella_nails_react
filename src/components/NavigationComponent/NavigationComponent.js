import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import $ from "jquery";

const pink_color = "rgba(213, 175, 148, 1)";

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
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 3%;
  top: 0px;
  width: 100%;
`;

const LOGO_LINK = styled.a`
  ${anchor_link_style}
`;

const LOGO_WRAPPER_MOBILE = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;

const LOGO_IMAGE = styled.img`
  max-height: 90px;
  max-width: 100%;
`;

const NAV = styled.nav`
  display: flex;
  margin-right: 150px;
`;

const NAV_MOBILE = styled.nav``;

const NAV_MODAL = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  opacity: 0;
  right: -100%;
  visibility: hidden;
  z-index: 3;
  width: 100%;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 1);
  overflow: hidden;
  transition: all 0.3s ease-in-out 0s;
  &.is-open {
    right: 0;
    opacity: 1;
    visibility: visible;
  }
`;

const Close = styled(CloseIcon)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 50px !important;
  cursor: pointer;
  position: relative;
  right: -85%;
`;

const MENU_ICON = styled(MenuIcon)`
  font-size: 50px !important;
  cursor: pointer;
`;

const LI = styled(Link)`
  list-style-type: none;
  margin-right: 40px;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 60px;
  padding-bottom: 4px;
  background-image: linear-gradient(to right top, #d5af94, #d5af94, #d5af94, #d5af94, #d5af94);
  background-position: 0 100%;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition:
    background-size 0.3s,
    background-position 0s 0.3s,
    color 0.3s;
  &.active {
    color: ${pink_color};
    background-position: 100% 100%;
    background-size: 100% 2px;
  }
  &:hover {
    background-position: 100% 100%;
    background-size: 100% 2px;
    color: ${pink_color};
  }
`;

const BookLi = styled(Link)`
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
`;

const LIMobile = styled(Link)`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  list-style: none;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  padding: 15px;
  margin: 10px;
  &.active {
    color: rgba(0, 0, 0, 1) !important;
    background-color: rgba(213, 175, 148, 1);
  }
`;

const BOOKING_WRAPPER = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  margin-right: 4%;
`;

const BOOKING_WRAPPER_MOBILE = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 30px;
  padding: 40px 40px;
  display: flex;
  justify-content: center;
`;

const BOOKING = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  padding: 10% 30%;
  transition: 0.4s;
  background-color: rgba(0, 0, 0, 1);
  &:before {
    display: inline-block;
    font-size: 4em;
    height: 0.67px;
    width: 20px;
    content: "";
    background-color: rgba(255, 255, 255, 1);
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 35rem rgba(213, 175, 148, 1);
  }
`;

const BOOKING_MOBILE = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 1);
  padding: 2% 43%;
  margin: 1%;
  transition: 0.4s;
  &:before {
    display: inline-block;
    font-size: 4em;
    height: 0.67px;
    width: 20px;
    content: "";
    background-color: rgba(255, 255, 255, 1);
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 35rem rgba(213, 175, 148, 1);
  }
`;

// eslint-disable-next-line react/prop-types
const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <LI className={isActive ? "active" : ""} to={to} {...props}>
      {children}
    </LI>
  );
};

// eslint-disable-next-line react/prop-types
const BookingLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <BookLi className={isActive ? "active" : ""} to={to} {...props}>
      {children}
    </BookLi>
  );
};

// eslint-disable-next-line react/prop-types
const CustomMobileLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <LIMobile className={isActive ? "mobile-link active" : "mobile-link"} to={to} {...props}>
      {children}
    </LIMobile>
  );
};

const NavigationComponent = ({ isMobile }) => {
  const [color, setColor] = useState(false);

  const closeNav = () => {
    $(".nav-mobile").removeClass("is-open");
  };

  const openNav = () => {
    $(".nav-mobile").addClass("is-open");
  };

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
      {!isMobile ? (
        <WRAPPER
          style={{ background: color ? "rgba(255, 255, 255, 1.0)" : "rgba(255, 255, 255, 0.7)" }}>
          <LOGO_LINK href="https://imgbb.com/">
            <LOGO_IMAGE src={nav_image_link} alt="example-image" border="0" />
          </LOGO_LINK>
          <NAV>
            <CustomLink to="/">HOME</CustomLink>
            <CustomLink to="/about">ABOUT US</CustomLink>
            <CustomLink to="/services">SERVICES</CustomLink>
            <CustomLink to="/gallery">GALLERY</CustomLink>
            <CustomLink to="/contact">CONTACT US</CustomLink>
          </NAV>
          <BOOKING_WRAPPER className="booking-wrapper">
            <BOOKING>
              <BookingLink to="/book">Booking</BookingLink>
            </BOOKING>
          </BOOKING_WRAPPER>
        </WRAPPER>
      ) : (
        <>
          <WRAPPER
            style={{
              background: color ? "rgba(255, 255, 255, 1.0)" : "rgba(255, 255, 255, 0.7)"
            }}>
            <LOGO_WRAPPER_MOBILE>
              <LOGO_LINK href="https://imgbb.com/">
                <LOGO_IMAGE src={nav_image_link} alt="example-image" border="0" />
              </LOGO_LINK>
              <MENU_ICON onClick={openNav} />
            </LOGO_WRAPPER_MOBILE>
            <NAV_MODAL className="nav-mobile">
              <div className="nav-close">
                <Close onClick={closeNav} />
              </div>
              <NAV_MOBILE>
                <CustomMobileLink to="/">HOME</CustomMobileLink>
                <CustomMobileLink to="/about">ABOUT US</CustomMobileLink>
                <CustomMobileLink to="/services">SERVICES</CustomMobileLink>
                <CustomMobileLink to="/gallery">GALLERY</CustomMobileLink>
                <CustomMobileLink to="/contact">CONTACT US</CustomMobileLink>
              </NAV_MOBILE>
              <BOOKING_WRAPPER_MOBILE className="booking-wrapper">
                <BOOKING_MOBILE>
                  <BookingLink to="/book">Booking</BookingLink>
                </BOOKING_MOBILE>
              </BOOKING_WRAPPER_MOBILE>
            </NAV_MODAL>
          </WRAPPER>
        </>
      )}
    </>
  );
};

NavigationComponent.propTypes = {
  isMobile: PropTypes.bool
};

NavigationComponent.defaultProps = {
  isMobile: false
};

export default NavigationComponent;
