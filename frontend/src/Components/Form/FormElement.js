import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  DatePick,
  MonthPick,
  TimePick,
  ColorPick,
  DateRange,
  DropZoneComp,
  Editor,
} from "./Picker";
import { Fingerprint } from "react-bootstrap-icons";
import Password from "./Password";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./Form.css";
import Topbar from "../../Hook/Topbar";
import MetaTags from "../HeadTag/MetaTags";

const FormElement = () => {
  const heading = "Form Elements";

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className="formlayout">
        <Row>
          <Col xs={12} md={6}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Sizes</h5>
              </div>
              <Form className="vertical-form">
                <div className="form-label">
                  <Form.Label column md={12}>Large</Form.Label>
                  <InputGroup className="col-md-12">
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </div>
                <div className="form-label">
                  <Form.Label column md={12}>Default</Form.Label>
                  <InputGroup className="col-md-12">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </div>
                <Form.Label column md={12}>Small</Form.Label>
                <InputGroup className="col-md-12">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Form>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Text Input</h5>
              </div>
              <Form className="vertical-form">
                <Form.Group className="form-label">
                  <Form.Label column md={12}>Basic Textarea</Form.Label>
                  <Col md={12}>
                    <Form.Control as="textarea" />
                  </Col>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="form-label">Unresizable Textarea</Form.Label>
                  <Col md={12}>
                    <Form.Control
                      as="textarea"
                      style={{ resize: "none" }}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Col>

          {/*Onchange error*/}
          <Col xs={12} md={6}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Basic Inputs</h5>
              </div>
              <Form className="vertical-form">
                <div className="form-label">
                  <Form.Label column md={12}>Text</Form.Label>
                  <InputGroup className="col-md-12">
                    <Form.Control
                      placeholder="Enter Your Name"
                      value={"Web Framez"}
                      type="text"
                    />
                  </InputGroup>
                </div>
                <div className="form-label">
                  <Form.Label>Email</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter your Email"
                      value={"webFramez@gmail.com"}
                      type="email"
                    />
                  </InputGroup>
                </div>
                <div className="form-label">
                  <Form.Label>Url</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter your Email"
                      value={"https//:www.webframez.com.in"}
                      type="url"
                    />
                  </InputGroup>
                </div>
                <div className="form-label">
                  <Form.Label>Phone</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter your Phone no."
                      value={"8457-5214-2102"}
                      type="phone"
                    />
                  </InputGroup>
                </div>
                <div className="form-label">
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <span className="form-with-icon">
                      <span>
                        <Fingerprint />
                      </span>
                      <Password />
                    </span>
                  </Form.Group>
                </div>
                <div className="form-label">
                  <Form.Label>Number</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter some Number"
                      value={"12365"}
                      type="number"
                    />
                  </InputGroup>
                </div>
                <div className="form-label">
                  <Row>
                    <Form.Group className="col-md-6 mb-3">
                      <Form.Label>Date</Form.Label>
                      <DatePick  />
                    </Form.Group>
                    <Form.Group className="col-md-6">
                      <Form.Label>Date Range</Form.Label>
                      <DateRange />
                    </Form.Group>
                  </Row>
                </div>
                <Row>
                  <Form.Group className="col-md-4">
                    <Form.Label>Month</Form.Label>
                    <MonthPick />
                  </Form.Group>
                  <Form.Group className="col-md-4">
                    <Form.Label>Time</Form.Label>
                    <TimePick />
                  </Form.Group>
                  <Form.Group className="col-md-4">
                    <Form.Label>Color</Form.Label>
                    <ColorPick />
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <Row>
              <Col xs={12}>
                <div className="grid-box">
                  <div className='grid-box-heading'>
                    <h5>Select</h5>
                  </div>
                  <Form className="vertical-form">
                    <div className="form-label">
                      <Form.Label>Basic Select</Form.Label>
                      <Form.Select>
                        <option placeholder="Select"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                      </Form.Select>
                    </div>
                    <div className="form-label">
                      <Form.Label>Disable Basic Select</Form.Label>
                      <Form.Select
                        disabled
                        style={{ cursor: "not-allowed" }}
                      >
                        <option placeholder="Select"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                      </Form.Select>
                    </div>
                    <Form.Group>
                      <Form.Label>File Browser</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Form>
                </div>
              </Col>

              {/*Onchange error*/}
              <Col xs={12}>
                <div className="grid-box">
                  <div className='grid-box-heading'>
                    <h5>Checkboxes and Raidos</h5>
                  </div>
                  <Row>
                    <Col xs={6}>
                      <Form className="checkbox-style">
                        <Form.Check
                          type={"checkbox"}
                          label="Checkbox"
                        />

                        <Form.Check
                          checked
                          type={"checkbox"}
                          label="Checked"
                        />

                        <Form.Check
                          disabled
                          type={"checkbox"}
                          label="Disabled Unhecked"
                        />

                        <Form.Check
                          checked
                          disabled
                          type={"checkbox"}
                          label="Disabled Checked"
                        />
                      </Form>
                    </Col>

                    <Col xs={6}>
                      <Form className="radio-btn-style">
                        <Form.Check
                          type={"radio"}
                          label="Checkbox"
                        />

                        <Form.Check
                          checked
                          type={"radio"}
                          label="Checked"
                        />

                        <Form.Check
                          disabled
                          type={"radio"}
                          label="Disabled Unhecked"
                        />

                        <Form.Check
                          checked
                          disabled
                          type={"radio"}
                          label="Disabled Checked"
                        />
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div className="grid-box">
                  <div className='grid-box-heading'>
                    <h5>Toggle Button</h5>
                  </div>
                  <Form className="toggle-switch">
                    <Form.Check type="switch" />
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col md={6}>
              <div className="grid-box">
                <div className='grid-box-heading'>
                  <h5>Sliders</h5>
                </div>
                <Slider className="mb-5" progress defaultValue={50} />
                <RangeSlider defaultValue={[10, 50]} />
              </div>
            </Col>
            <Col md={6}>
              <div className="grid-box">
                <div className='grid-box-heading'>
                  <h5>DropZone</h5>
                </div>
                <DropZoneComp />
              </div>
            </Col>
          </Row>
          <Col md={6}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Text Editor</h5>
              </div>
              <div className="text-editor">
                <Editor />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FormElement;
