import React from "react";
import Modal from "react-bootstrap/Modal";
import * as errorConstant from "../../../Constant/ErrorPage";
import { Controller } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormModal = ({ show, handleClose, onSubmit, errors, control, msg }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="mt-5 p-5">
        <Modal.Header closeButton>
          <h5 className="modal-heading">Contact Information</h5>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit} className="w-100 mt-2">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Name:
              </Form.Label>
              <Col sm={8}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      {...field}
                    />
                  )}
                />
                {errors.name && (
                  <span className="error">{errorConstant.VALIDATE}</span>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Email:
              </Form.Label>
              <Col sm={8}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  }}
                  render={({ field }) => (
                    <Form.Control
                      type="email"
                      placeholder="Enter Email Address"
                      {...field}
                    />
                  )}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="error">{errorConstant.VALIDATE}</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="error">{errorConstant.VALIDATEAGAIN}</span>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Phone:
              </Form.Label>
              <Col sm={8}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="phone"
                      placeholder="Enter Phone Number"
                      {...field}
                    />
                  )}
                />
                {errors.phone && (
                  <span className="error">{errorConstant.VALIDATE}</span>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Position:
              </Form.Label>
              <Col sm={8}>
                <Controller
                  name="position"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Enter Position"
                      {...field}
                    />
                  )}
                />
                {errors.position && (
                  <span className="error">{errorConstant.VALIDATE}</span>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Company Name:
              </Form.Label>
              <Col sm={8}>
                <Controller
                  name="company"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Enter Company Name"
                      {...field}
                    />
                  )}
                />
                {errors.company && (
                  <span className="error">{errorConstant.VALIDATE}</span>
                )}
              </Col>
            </Form.Group>

            <button className="form-btn" type="submit">
              {msg}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormModal;
