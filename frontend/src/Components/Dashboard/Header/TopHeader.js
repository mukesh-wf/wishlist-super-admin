import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import LadyFace from "../../Image/lady.jpg";
import {
  Search,
  ThreeDotsVertical, BracesAsterisk, ChatDots, BoxArrowRight, Mic, Person, FileEarmarkText,
  Envelope,
  Bell,
} from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import { utils } from "../../Store/Utils";
import Setting from "../../Site Setting/SettingLayout";
import LogoImg from "../../Image/logo.png";
import whiteLogo from '../../Image/login-logo.png';
import allFeature from '../../Image/allFeature.png';
import payment from '../../Image/payment.png';
import theme from '../../Image/theme.png';
import design from '../../Image/design.png';



const TopHeader = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [setting, setSetting] = useState(false);
  const [mail, setMail] = useState(false);
  const [notification, setNotification] = useState(false);
  const [clickSearch, setClickSearch] = useState(false)
  const [clickSearchInput, setClickSearchInput] = useState("")
  const clickOutside = useRef();

  const handleShow = () => {
    dispatch(utils.settingLayout(true))
    setShow(true)
  };

  const selectedLayoutTheme = useSelector(
    (state) => state.colorTheme.layoutTheme
  );

  const removeHandler = () => {
    localStorage.removeItem("listView")
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

  const handleLog = () => {
    localStorage.removeItem("List")
    localStorage.removeItem("display")
    localStorage.removeItem("arr")
    localStorage.removeItem("check")
  }
  const selectedColorTheme = useSelector(
    (state) => state.colorTheme.colorTheme
  );


  return (
    <>
      <section className={selectedLayoutTheme === "right-align-layout" ? "right-side-setting-img" : "setting-img"}>
        <Gear onClick={handleShow} />
        {show && <Setting />}
      </section>
      <Navbar
        expand="md"
        className={(selectedLayoutTheme === "right-align-layout" &&
          "main-header reverse-header") || (selectedLayoutTheme === "left-align-layout" &&
            "main-header")
        }
        fixed="top"
      >

        <Container fluid>

          <Navbar.Brand href="#" className="brand-name">
            {selectedColorTheme === "dark-theme"
              ?
              <img alt="Site Logo" src={whiteLogo} />
              :
              <img alt="Site Logo" src={LogoImg} />
            }
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="navbar-collapse-nav"><ThreeDotsVertical /></Navbar.Toggle>
          <Navbar.Collapse id="navbar-collapse-nav">
            <Nav>

              <NavDropdown title="Dashboard" className="basic-nav-dropdown">
                <NavLink to="/dashboard/ecommerce" className="navlink-from-top-sidebar">
                  Ecommerce
                </NavLink>
                <NavLink to={"/dashboard/socialmedia"} className="navlink-from-top-sidebar">
                  Social Performance
                </NavLink>
                <NavLink to="/dashboard/finance" className="navlink-from-top-sidebar">
                  Finance
                </NavLink>
                <NavLink to={"/dashboard/siteperformance"} className="navlink-from-top-sidebar">
                  Site Performance
                </NavLink>
              </NavDropdown>

              <NavDropdown title="Apps" className="basic-nav-dropdown">
                <NavDropdown title='Ecommerce' drop="end" className="basic-nav-dropdown">
                  <NavLink to={"/eCommerce/gridview"} className="navlink-from-top-sidebar" >
                    Products
                  </NavLink>
                  <NavLink to={"/ecommerce/productDetail/1"} className="navlink-from-top-sidebar">
                    Product Details
                  </NavLink>
                  <NavLink to={"/ecommerce/addproduct"} className="navlink-from-top-sidebar">
                    Add Product
                  </NavLink>
                  <NavLink to={"/ecommerce/updateproduct"} className="navlink-from-top-sidebar">
                    Update Product
                  </NavLink>
                  <NavLink to={"/ecommerce/orders"} className="navlink-from-top-sidebar">
                    Orders
                  </NavLink>
                  <NavLink to={"/ecommerce/sellers"} className="navlink-from-top-sidebar">
                    Sellers
                  </NavLink>
                  <NavLink to={"/ecommerce/invoice"} className="navlink-from-top-sidebar">
                    Invoice
                  </NavLink>
                  <NavLink to={"/ecommerce/cart"} className="navlink-from-top-sidebar">
                    Cart
                  </NavLink>
                </NavDropdown>

                <NavDropdown title="Contacts" drop="end" className="basic-nav-dropdown">
                  <NavLink to={"/contacts/contactgrid"} className="navlink-from-top-sidebar" >
                    Contact Grid
                  </NavLink>
                  <NavLink to={"/contacts/contactlist"} className="navlink-from-top-sidebar">
                    Contact List
                  </NavLink>
                  <NavLink to={"/contacts/createcontact"} className="navlink-from-top-sidebar">
                    Create Contact
                  </NavLink>
                </NavDropdown>

                <NavDropdown title="User Listing" drop="end" className="basic-nav-dropdown">
                  <NavLink to="/user/gridlisting/1?role=all&plan=all&status=all" className="navlink-from-top-sidebar" onClick={removeHandler}> List</NavLink>
                </NavDropdown>

                <NavLink to={"/todo"} className="navlink-from-top-sidebar" >
                  ToDo
                </NavLink>
              </NavDropdown>


              <NavDropdown title='Pages' className="basic-nav-dropdown">
                <NavLink to={"/testimonial"} className="navlink-from-top-sidebar" >
                  Testimonial
                </NavLink>

                <NavLink to={"/faqs"} className="navlink-from-top-sidebar" >
                  FAQs
                </NavLink>

                <NavDropdown title="Setting" drop="end" className="basic-nav-dropdown">
                  <NavLink to="/setting" className="navlink-from-top-sidebar">
                    Site Setting
                  </NavLink>
                  <NavLink to="/profile" className="navlink-from-top-sidebar">
                    Profile Setting
                  </NavLink>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title='Features' className="basic-nav-dropdown">
                <NavDropdown title='Charts' drop="end">
                  <NavDropdown title="Charts" className="basic-nav-dropdown">
                    <NavLink to="/charts/chartjs" className="navlink-from-top-sidebar">
                      Chart js
                    </NavLink>
                    <NavLink to="/charts/googlecharts" className="navlink-from-top-sidebar">
                      Google Charts
                    </NavLink>
                  </NavDropdown>

                  <NavDropdown title="Apex Charts" className="basic-nav-dropdown">
                    <NavLink to="/apexcharts/columncharts" className="navlink-from-top-sidebar">
                      Column Charts
                    </NavLink>
                    <NavLink to="/apexcharts/linecharts" className="navlink-from-top-sidebar">
                      Line. Charts
                    </NavLink>
                    <NavLink to="/apexcharts/areacharts" className="navlink-from-top-sidebar">
                      Area Charts
                    </NavLink>
                    <NavLink to="/apexcharts/barcharts" className="navlink-from-top-sidebar">
                      Bar Charts
                    </NavLink>
                    <NavLink to="/apexcharts/piecharts" className="navlink-from-top-sidebar">
                      Pie Charts
                    </NavLink>
                    <NavLink to="/apexcharts/radialbarcharts" className="navlink-from-top-sidebar">
                      Radialbar Charts
                    </NavLink>
                    <NavLink to="/apexcharts/radarcharts" className="navlink-from-top-sidebar">
                      Radar Charts
                    </NavLink>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown title="Forms" drop="end" className="basic-nav-dropdown">
                  <NavLink to={"/form/layouts"} className="navlink-from-top-sidebar" >
                    Form Layout
                  </NavLink>
                  <NavLink to={"/form/elements"} className="navlink-from-top-sidebar">
                    Form Element
                  </NavLink>
                  <NavLink to={"/form/validation"} className="navlink-from-top-sidebar">
                    Form Validation
                  </NavLink>
                </NavDropdown>
              </NavDropdown>
            </Nav>
            <div className="tab-search">
              <Form className="d-flex">
                <Form.Control
                  width="100%"
                  type="search"
                  placeholder="Search"
                  className={(selectedLayoutTheme === "left-align-layout" && "leftsearchbar-me-2") || (selectedLayoutTheme === "right-align-layout" && "rightsearchbar-me-2")}
                  aria-label="Search"
                  dir="rtl"
                  onClick={() => setClickSearch(true)}
                  onChange={(e) => setClickSearchInput(e.target.value)}
                />
                <Search color="black" size={20} className={`${selectedLayoutTheme === "right-align-layout" ? 'rightsearchicon' : 'leftsearchicon'}`} />
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

              <div className="social-svg">
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
                        <li><div className="share-image"><img src={allFeature} alt="payment" /></div><h3>All Features<span>Introducing increment subscriptions</span></h3></li>
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
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default TopHeader;
