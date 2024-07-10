import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { utils } from "../Store/Utils";

const PageNotFound = () => {
  const navigate = useNavigate();
  const isCheck = JSON.parse(localStorage.getItem("check"))
  let show = true;
  const dispatch = useDispatch();
  dispatch(utils.handlePage(show))

  const goBack = () => {
    navigate({
      pathname: "/"
    })
    let show = false
    dispatch(utils.handlePage(show))
  }

  const goToHome = () => {
    navigate({
      pathname: "/dashboard"
    })
    let show = false
    dispatch(utils.handlePage(show))
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 vh-100">
      <h1>404 Page Not Found</h1>
      {isCheck === true
        ?
        <Button onClick={goToHome} variant="warning">Go Back to Home Page</Button>
        :
        <Button onClick={goBack} variant="warning">Go Back</Button>
      }
    </div>
  )
};

export default PageNotFound;


