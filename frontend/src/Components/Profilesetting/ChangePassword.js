import React, { useRef, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Error from '../../Constant/ErrorPage';
import Swal from "sweetalert2";
import visible from '../Image/eye.svg';
import visibleoff from '../Image/eye-slash.svg';

const ChangePassword = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const newpassword = useRef({});
  newpassword.current = watch("newpassword", "");
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);

  const onSubmit = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Password Changed Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const toggle = () => {
    setHide((prev) => !prev);
  };

  const toggle1 = () => {
    setHide1((prev1) => !prev1);
  };

  const toggle2 = () => {
    setHide2((prev2) => !prev2);
  };


  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Old Password</Form.Label>
                <span className="form-with-icon">
                  <Form.Control
                    type={!hide ? "password" : "text"}
                    placeholder="Enter old password"
                    {...register("oldpassword", {
                      required: true,
                    })}
                  />
                  <i onClick={toggle}>
                    {hide ? <img src={visible} alt="visible" /> : <img src={visibleoff} alt="visible off" />}
                  </i>
                </span>
                {errors.oldpassword && errors.oldpassword.type === "required" && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {Error.VALIDATE}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3 icon">
                <Form.Label>New Password</Form.Label>
                <span className="form-with-icon">
                  <Form.Control
                    type={!hide ? "password" : "text"}
                    placeholder="Enter new password"
                    {...register("newpassword", {
                      required: true,
                    })}
                  />
                  <i onClick={toggle1}>
                    {hide1 ? <img src={visible} alt="visible" /> : <img src={visibleoff} alt="visible off" />}
                  </i>
                </span>
                {errors.newpassword && errors.newpassword.type === "required" && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {Error.VALIDATE}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3 icon">
                <Form.Label>Confirm New Password</Form.Label>
                <span className="form-with-icon">
                  <Form.Control
                    type={!hide ? "password" : "text"}
                    placeholder="Enter confirm new password"
                    {...register("confirmnewpassword", {
                      required: true,
                      validate: (value) =>
                        value === newpassword.current ||
                        "The passwords do not match",
                    })}
                  />
                  <i onClick={toggle2}>
                    {hide2 ? <img src={visible} alt="visible" /> : <img src={visibleoff} alt="visible off" />}
                  </i>
                </span>
                {errors.confirmnewpassword &&

                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.confirmnewpassword.message}
                  </p>
                }
                {errors.confirmnewpassword &&
                  errors.confirmnewpassword.type === "required" && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {Error.VALIDATE}
                    </p>
                  )}
              </Form.Group>

              <button className="form-btn" type="submit">Submit</button>
            </form>
        </Col>
      </Row>
    </Container >
  );
};

export default ChangePassword;

