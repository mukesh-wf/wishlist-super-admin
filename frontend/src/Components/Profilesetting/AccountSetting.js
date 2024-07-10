import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const AccountSetting = () => {
  const {
    formState: { errors },
  } = useForm();
  let name = localStorage.getItem("name");
  const [value, setValue] = useState(name);
  const handleKeyPress = (e) => {
    setValue(e.target.value)
  };

  useEffect(() => {
    localStorage.removeItem("listView")

  }, [name, value])


  return (
    <>
      <Container>
        <Row className='profile account-setting'>
          <Col xs={12} md={12}>
              <Form.Group className='mb-3'>
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={value}
                  onChange={handleKeyPress}
                />
                {errors.name && errors.name.type === "required" && (
                  <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                )}
                <span style={{ fontSize: "14px" }}>Your Dashboard URL: http://dashboard.com/<b>{value}</b></span>
              </Form.Group>

              <Form.Group className='account-form-top'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleKeyPress}
                />
                {errors.name && errors.name.type === "required" && (
                  <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                )}
              </Form.Group>

              <Form.Group className='d-flex align-itmes-center mb-25'>
                <div className='div-para'>
                  <h4>Close Account</h4>
                  <p>Delete your Account and Account Data</p>
                </div>

                <div className='d-flex align-itmes-center'>
                  <Button className="form-btn" variant="danger">Close Account</Button>
                </div>
              </Form.Group>

              <button className='form-btn'>Save Changes</button>{' '}
              <button className='form-cancel'>Cancel</button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AccountSetting;