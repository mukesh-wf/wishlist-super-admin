import React, { useEffect, useState } from "react";
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import { PencilSquare, QuestionCircle, Book, BarChart, HouseFill, GearFill, PersonPlus, BarChartSteps, PeopleFill, Cart, Clipboard2Fill } from "react-bootstrap-icons";
import ContentRouter from "../../../Route/ContentRouter";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { Gear } from "react-bootstrap-icons";
import Footer from "../Footer/Footer";
import { utils } from "../../Store/Utils";
import Setting from "../../Site Setting/SettingLayout";

const Sidebars = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleShow = () => {
    dispatch(utils.settingLayout(true))
    setShow(true)
  };

  const selectedLayoutTheme = useSelector(state => state.colorTheme.layoutTheme);
  let layoutType;

  if (selectedLayoutTheme === "right-align-layout") {
    layoutType = true
  }
  else {
    layoutType = false
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const handleHide = () => {
    const getSideBar = document.querySelector('.ps-sidebar-root')
   
    console.log("(windowWidth > 992 && getSideBar.classList.contains('ps-collapsed')", windowWidth > 992 , getSideBar.classList.contains('ps-collapsed'))
    if (windowWidth > 992 && getSideBar.classList.contains('ps-collapsed')) {
      getSideBar.classList.add("ps-collapsed")
    } else{
      getSideBar.classList.remove('ps-collapsed')
    }
  }



  return (
    <>
      <section className={selectedLayoutTheme === "right-align-layout" ? "right-side-setting-img" : "setting-img"} >
        <Gear onClick={handleShow} />
        {show && <Setting />}
      </section>

      <section className="layout-has-sidebar" style={{ direction: layoutType ? 'rtl' : 'ltr' }}  >
        <Sidebar transitionDuration={1000} layoutType >
          <aside className="layout-sidebar-light" >
            <Menu
              menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  if (level === 0)
                    return {
                      color: disabled ? '#f5d9ff' : '#d359ff',
                      backgroundColor: active ? '#eecef9' : undefined,
                    };
                }
              }}
            >
              <span className="sidebar-main-menu">MAIN MENU</span>
              <SubMenu defaultOpen label="Dashboard" icon={<HouseFill />}>
                <MenuItem component={<NavLink onClick={handleHide} to="/dashboard/ecommerce" />}> Ecommerce</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to="/dashboard/socialmedia" />}>Social Media </MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to="/dashboard/finance" />}>Finance </MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to="/dashboard/New" />}>Sale Performance </MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to="/dashboard/siteperformance" />}>Site Performance </MenuItem>
              </SubMenu>

              <SubMenu label="ECommerce" icon={<Cart />}>
                <MenuItem component={<NavLink onClick={handleHide} to={"/eCommerce/gridview"} />}>Products</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={"/eCommerce/productDetail/1"} />}>Product Detail</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={"/eCommerce/addProduct"} />}>Add Product</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={"/eCommerce/updateProduct"} />}>Update Product</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={"/eCommerce/orders"} />}>Orders</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={"/eCommerce/sellers"} />}>Sellers</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={"/eCommerce/invoice"} />}>Invoice</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={"/eCommerce/cart"} />}>Cart</MenuItem>
              </SubMenu>

              <SubMenu label="Contacts" icon={<PersonPlus />}>
                <MenuItem component={<NavLink onClick={handleHide} to={'/contacts/contactgrid'} />}>Contacts Grid</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/contacts/contactlist'} />}>Contacts List</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/contacts/createcontact'} />}>Create Contact</MenuItem>
              </SubMenu>

              <MenuItem icon={<PencilSquare />} component={<NavLink onClick={handleHide} to={"/todo"} />}>To Do</MenuItem>

              <SubMenu label="Charts" icon={<BarChart />}>
                <MenuItem component={<NavLink onClick={handleHide} to={'/charts/chartjs'} />}>Chart js</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/charts/googlecharts'} />}>Google Chart</MenuItem>
              </SubMenu>

              <SubMenu label="Apex Charts" icon={<BarChartSteps />}>
                <MenuItem component={<NavLink onClick={handleHide} to={'/apexcharts/columncharts'} />}>Column Charts</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/apexcharts/linecharts'} />}>Line Charts</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/apexcharts/areacharts'} />}>Area Charts</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/apexcharts/barcharts'} />}>Bar Charts</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/apexcharts/piecharts'} />}>Pie Charts</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/apexcharts/radialbarcharts'} />}>Radialbar Charts</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to={'/apexcharts/radarcharts'} />}>Radar Charts</MenuItem>
              </SubMenu>

              <SubMenu label="Store Data" icon={<PeopleFill />}>
                {/* <MenuItem component={<NavLink onClick={handleHide} to="/user/gridlisting/1?role=all&plan=all&status=all" />}> List</MenuItem> */}
                <MenuItem component={<NavLink onClick={handleHide} to="/storedata/reportpage" />}>Store Listing</MenuItem>
              </SubMenu>

              <SubMenu label="Setting" icon={<GearFill />}>
                <MenuItem component={<NavLink onClick={handleHide} to="/setting" />}> Site Setting</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to="/profile" />}> Profile Setting</MenuItem>
              </SubMenu>

              <MenuItem icon={<Book />} component={<NavLink onClick={handleHide} to={"/testimonial"} />}>Testimonial</MenuItem>

              <MenuItem icon={<QuestionCircle />} component={<NavLink onClick={handleHide} to={"/faqs"} />}>FAQs</MenuItem>

              <SubMenu label="Form" icon={<Clipboard2Fill />}>
                <MenuItem component={<NavLink onClick={handleHide} to="/form/layouts" />}> Form Layout</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to="/form/elements" />}> Form Element</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to="/form/validation" />}> Form Validation</MenuItem>
              </SubMenu>

              {/* <SubMenu label="UserData" icon={<PeopleFill />}>
                <MenuItem component={<NavLink onClick={handleHide} to="/userData" />}> Report Page</MenuItem>
                <MenuItem component={<NavLink onClick={handleHide} to="/profile" />}> Profile Setting</MenuItem>
              </SubMenu> */}
            </Menu>
          </aside>
        </Sidebar>

        <section className="main-layout">
          <ContentRouter />
          <Footer />
        </section>
      </section>
    </>
  );
};

export default Sidebars;