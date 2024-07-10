import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Col } from "react-bootstrap";
import {
  Envelope,
  Bell,
  Gear,
  Search,
  List,
  ThreeDotsVertical,
  Person,
  FileEarmarkText,
  Mic,
  BoxArrowRight,
  BracesAsterisk,
  ChatDots
} from "react-bootstrap-icons";
import LadyFace from "../../Image/lady.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProSidebar } from 'react-pro-sidebar';
import './Header.css';
import LogoImg from "../../Image/logo.png";
import whiteLogo from '../../Image/login-logo.png';
import allFeature from '../../Image/allFeature.png';
import payment from '../../Image/payment.png';
import theme from '../../Image/theme.png';
import design from '../../Image/design.png';



const Header = () => {
  const { collapseSidebar } = useProSidebar();
  const [profile, setProfile] = useState(false);
  const [setting, setSetting] = useState(false);
  const [mail, setMail] = useState(false);
  const [notification, setNotification] = useState(false);
  const [clickSearch, setClickSearch] = useState(false)
  const [clickSearchInput, setClickSearchInput] = useState("")
  const clickOutside = useRef();

  const selectedLayoutTheme = useSelector(
    (state) => state.colorTheme.layoutTheme
  );

  const selectedColorTheme = useSelector(
    (state) => state.colorTheme.colorTheme
  );

  const handleLog = () => {
    localStorage.removeItem("List")
    localStorage.removeItem("display")
    localStorage.removeItem("arr")
    localStorage.removeItem("check")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickOutside && clickOutside.current && !clickOutside.current.contains(event.target)) {
        setMail(false);
        setNotification(false)
        setSetting(false)
        setProfile(false)
        setClickSearch(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickOutside]);

  return (
    <Navbar
      expand="lg"
      className={
        selectedLayoutTheme === "right-align-layout"
          ? "main-header reverse-header"
          : "main-header "
      }
      fixed="top"
    >

      <Col md={2}>
        <button onClick={() => collapseSidebar()}><List /></button>
        <Navbar.Brand href="#" className="brand-name">
          {selectedColorTheme === "dark-theme"
            ?
            <img alt="Site Logo" src={whiteLogo} />
            :
            <img alt="Site Logo" src={LogoImg} />
          }
        </Navbar.Brand>
      </Col>

      <Navbar.Toggle aria-controls="basic-nav-navbar"><ThreeDotsVertical /></Navbar.Toggle>
      <Navbar.Collapse id="basic-nav-navbar">
        <Col md={9} >
          <Form className="d-flex">
            {selectedLayoutTheme === "left-align-layout" && <Search color="black" />}
            <Form.Control
              type="search"
              placeholder="Search..."
              className={selectedLayoutTheme === "left-align-layout" || selectedLayoutTheme === "right-align-layout"}
              aria-label="Search"
              onClick={() => setClickSearch(true)}
              onChange={(e) => setClickSearchInput(e.target.value)}
            />
            {selectedLayoutTheme === "right-align-layout" && <Search color="black" />}
          </Form>

          {clickSearch &&
            <div className="searchedDiv" ref={clickOutside}>
              <div className="grid-box-heading">
                <h5>Search List</h5>
              </div>
              <ul>
                {clickSearchInput !== "" ?
                  <li>Data not found...</li>
                  :
                  <>
                    <li>Bootstrap Design UI  <span>102541 People</span></li>
                    <li>Tailwind Design UI  <span>10000 People</span></li>
                    <li>Matrial Design  <span>14523 People</span></li>
                    <li>AntDesign  <span>36521 People</span></li>
                    <li>Design UI <span>1235 People</span></li>
                  </>
                }
              </ul>
            </div>
          }
        </Col>

        <Col md={3}>
          <div className="headerProfile">
            <div className="message">
              <sup className="dot bgGreen"></sup>
              <Envelope className="header-icon" onClick={() => setMail(true)} />
              {mail &&
                <ul className="author-setting setting-dropdown" ref={clickOutside}>
                  <li><div className="share-image"><BracesAsterisk /></div><h3>Software</h3><span> 5 hours ago</span></li>
                  <li><div className="share-image"><BracesAsterisk /></div><h3>Software</h3><span> 7 hours ago</span></li>
                  <li><div className="share-image"><BracesAsterisk /></div><h3>Software</h3><span> 9 hours ago</span></li>
                  <li><h3>See all incoming activities</h3></li>
                </ul>
              }
            </div>

            <div className="notification">
              <sup className="dot bgRed"></sup>
              <Bell className="header-icon" onClick={() => setNotification(true)} />
              {notification &&
                <ul className="author-setting setting-dropdown" ref={clickOutside}>
                  <li><div className="share-image"><ChatDots /></div><h3>James sent you a message</h3><span>5 hrs ago</span></li>
                  <li><div className="share-image"><ChatDots /></div><h3>Jonvick sent you a message</h3><span>6 hrs ago</span></li>
                  <li><div className="share-image"><ChatDots /></div><h3>Kayle sent you a message</h3><span>7 hrs ago</span></li>
                  <li><h3>See all messages</h3></li>
                </ul>
              }
            </div>

            <div className="setting">
              <Gear className="header-icon" onClick={() => setSetting(true)} />
              {setting &&
                <div className="author-setting setting-dropdown" ref={clickOutside}>
                  <ul>
                    <li><div className="share-image"><img src={allFeature} alt="all" /></div><h3>All Features<span>Introducing increment subscriptions</span></h3></li>
                    <li><div className="share-image"><img src={payment} alt="payment" /></div><h3>Payments<span>We handle billion of dollars</span></h3></li>
                    <li><div className="share-image"><FileEarmarkText /></div><h3>Content Planner<span>Centralize content gethering and editing</span></h3></li>
                  </ul>
                  <ul>
                    <li><div className="share-image"><img src={theme} alt="theme" /></div><h3>Themes<span>Third party themes that are compatible</span></h3></li>
                    <li><div className="share-image"><img src={design} alt="design" /></div><h3>Design Mockups<span>Share planning visuals with clients</span></h3></li>
                    <li><div className="share-image"><Mic /></div><h3>Diagram Maker<span>Plan user flows and tset scenarios</span></h3></li>
                  </ul>
                </div>
              }
            </div>

            <div className="nav-author">
              <img src={LadyFace} alt="Author Profile" onClick={() => setProfile(true)} />


              {profile &&
                <ul className="author-setting" ref={clickOutside}>
                  <li><Link to="/profile" onClick={() => setProfile(false)}><Person />Profile</Link></li>
                  <li><Link to="/setting" onClick={() => setProfile(false)}><Gear />setting</Link></li>
                  <li><Link to="/" onClick={handleLog}><BoxArrowRight />Log out</Link></li>
                </ul>
              }
            </div>
          </div>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;