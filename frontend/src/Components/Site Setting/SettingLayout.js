import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { colorThemeActions } from "../Store/ColorThemeState";
import { Offcanvas } from "react-bootstrap";
import Dark from "../Image/dark.png";
import Light from "../Image/light.png";
import LeftAlign from "../Image/Left.png";
import RightAlign from "../Image/Right.png";
import SideAlign from "../Image/Side.png";
import TopAlign from "../Image/Top.png";
import { utils } from '../Store/Utils';
import { useMediaQuery } from 'react-responsive';

const Setting = () => {
  const dispatch = useDispatch()
  const showHanlder = useSelector(state => state.utils.setting)

  const handleClose = () => {
    dispatch(utils.settingLayout(false))
  }

  const selectedColorTheme = useSelector(
    (state) => state.colorTheme.colorTheme
  );

  const selectedLayoutTheme = useSelector(
    (state) => state.colorTheme.layoutTheme
  );

  const selectedNavbarTheme = useSelector(
    (state) => state.colorTheme.navbarTheme
  );

  const MaxWidth = useMediaQuery({ query: '(max-width: 768px)' });


  return (
    <>
      <Offcanvas show={showHanlder} style={{ float: "left" }} placement={selectedLayoutTheme === "right-align-layout" ? "start" : "end"} onHide={handleClose}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title id={`offcanvasNavbarLabel`}>
            Customizer
          </Offcanvas.Title>
        </Offcanvas.Header>

        <h5 className='ms-3'>Customize your overview Page layout</h5>
        <Offcanvas.Body>
          <div className='setting-box'>
            <div>
              <h6 className='mt-3'>Select your color mode</h6>
            </div>

            <div className='layout-img'>
              <img
                src={Light}
                alt="light mode "
                style={{ cursor: "pointer" }}
                className={
                  selectedColorTheme === "default-theme"
                    ? "selected-mode"
                    : ""
                }
                onClick={() => {
                  localStorage.setItem("theme", "default-theme")
                  dispatch(colorThemeActions.mySelectedTheme("default-theme"))
                  dispatch(utils.displayLayoutStatus(true))
                  setTimeout(() => {
                    dispatch(utils.displayLayoutStatus(false))
                  }, 2000);
                }}
              />

              <img
                src={Dark}
                alt="dark mode "
                style={{ cursor: "pointer" }}
                className={
                  selectedColorTheme === "dark-theme" ? "selected-mode" : ""
                }
                onClick={() => {
                  localStorage.setItem("theme", "dark-theme")
                  dispatch(colorThemeActions.mySelectedTheme("dark-theme"))
                  dispatch(utils.displayLayoutStatus(true))
                  setTimeout(() => {
                    dispatch(utils.displayLayoutStatus(false))
                  }, 2000);
                }}
              />
            </div>
          </div>


          <div className='setting-box'>
            <div>
              <h6 className='mt-5'>Select your Layout Type</h6>
            </div>

            <div className='layout-img'>
              <img
                src={LeftAlign}
                alt="LeftAlign mode "
                style={{ cursor: "pointer" }}
                className={
                  selectedLayoutTheme === "left-align-layout"
                    ? "selected-mode"
                    : ""
                }
                onClick={() => {
                  localStorage.setItem("layoutTheme", "left-align-layout")
                  dispatch(
                    colorThemeActions.mySelectedLayoutTheme(
                      "left-align-layout"
                    )
                  )
                  dispatch(utils.displayLayoutStatus(true))
                  setTimeout(() => {
                    dispatch(utils.displayLayoutStatus(false))
                  }, 2000);
                }}
              />

              <img
                src={RightAlign}
                alt="RightAlign mode "
                style={{ cursor: "pointer" }}
                className={
                  selectedLayoutTheme === "right-align-layout"
                    ? "selected-mode"
                    : ""
                }
                onClick={() => {
                  localStorage.setItem("layoutTheme", "right-align-layout")
                  dispatch(
                    colorThemeActions.mySelectedLayoutTheme("right-align-layout")
                  )
                  dispatch(utils.displayLayoutStatus(true))
                  setTimeout(() => {
                    dispatch(utils.displayLayoutStatus(false))
                  }, 2000);
                }}
              />
            </div>
          </div>


          <div className='setting-box'>
            <div>
              <h6 className='mt-5'>Select your Navbar Type</h6>
            </div>

            <div className='layout-img'>
              <img
                src={SideAlign}
                alt="SideAlign mode "
                style={{ cursor: "pointer" }}
                className={
                  selectedNavbarTheme === "sidebarTheme"
                    ? "selected-mode"
                    : ""
                }
                onClick={() => {
                  localStorage.setItem("navbarTheme", "sidebarTheme")
                  dispatch(
                    colorThemeActions.mySelectedNavbarTheme(
                      "sidebarTheme"
                    )
                  )
                  dispatch(utils.displayLayoutStatus(true))
                  setTimeout(() => {
                    dispatch(utils.displayLayoutStatus(false))
                  }, 2000);
                }}
              />


              {MaxWidth ? <img
                src={TopAlign}
                alt="TopAlign mode "
                className={
                  selectedNavbarTheme === "right-align-layout"
                    ? "selected-mode"
                    : ""
                }
                onClick={() => {
                  localStorage.setItem("navbarTheme", "right-align-layout")
                  dispatch(
                    colorThemeActions.mySelectedNavbarTheme(
                      "right-align-layout"
                    )
                  )
                  dispatch(utils.displayLayoutStatus(true))
                  setTimeout(() => {
                    dispatch(utils.displayLayoutStatus(false))
                  }, 2000);
                }}
              />
                :
                <img
                  src={TopAlign}
                  alt="TopAlign mode "
                  className={
                    selectedNavbarTheme === "top-align-layout"
                      ? "selected-mode"
                      : ""
                  }
                  onClick={() => {
                    localStorage.setItem("navbarTheme", "top-align-layout")
                    dispatch(
                      colorThemeActions.mySelectedNavbarTheme(
                        "top-align-layout"
                      )
                    )
                    dispatch(utils.displayLayoutStatus(true))
                    setTimeout(() => {
                      dispatch(utils.displayLayoutStatus(false))
                    }, 2000);
                  }}
                />}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default Setting;