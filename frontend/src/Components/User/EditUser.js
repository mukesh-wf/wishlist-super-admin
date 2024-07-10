import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Plan from '../Data/User/Filter.json';
import User from '../Data/User/User.json';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import * as Error from '../../Constant/ErrorPage';
import MetaTags from '../HeadTag/MetaTags';
import "./Userlisting.scss";
import { DatePick } from '../Form/Picker';


const EditUser = () => {
  const [plan, setPlan] = useState([]);
  const { reset, register, formState: { errors }, handleSubmit } = useForm();
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    let userData = User.user.find((val) => {
      if (val.id === parseInt(id)) {
        return val
      }
      return null
    })
    reset({
      name: userData.name,
      city: userData.city,
      plan: userData.plan,
      radio: userData.gender,
      dob: userData.dob
    })
    setPlan(Plan.plan)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan, id])



  const onSubmit = (data) => {
    console.log("Data", data)
  };

  return (
    <>
      <MetaTags title="Edit User" />
      <div className='page-header'>
        <h2> Edit User</h2>
      </div>
      <form className='formBox' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <div controlId="validationCustom01">
              <label for="validationCustom01">Name</label>
              <Form.Control
                type="text"
                placeholder="First name"
                {...register("name", {
                  required: true,
                })}

              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </div>
            {errors.name && errors.name.type === "required" && (
              <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
            )}
          </Col>

          <Col md={6}>
            <div controlId="dob" >
              <label for="dob">Select Date</label>
              <DatePick addClass={"form-control"} />
            </div>
          </Col>

          <Col md={6}>
            <label>Select Plan Type</label>
            <Form.Control as="select"  {...register("select", {
              required: Error.VALIDATE,
            })} >
              {plan.map((user, index) => {
                return (
                  <React.Fragment key={index}>
                    <option value={user.plan}  >{user.plan}</option>
                  </ React.Fragment>
                )
              })
              }
            </Form.Control>
            {errors.select && errors.select.type === "required" && (
              <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
            )}
          </Col>

          <Col md={6}>
            <div controlId="validationCustom03">
              <label for="validationCustom03">City</label>
              <Form.Control type="text" placeholder="City"   {...register("city", {
                required: true,
              })} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </div>
            {errors.city && errors.city.type === "required" && (
              <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
            )}
          </Col>

          <Col md={12}>
            <label>Gender </label>
            <div className='formCheck-box'>
              <Form.Check
                type="radio"
                label="Male"
                name="radio"
                id="radio1"
                value='male'
                {...register("radio", {
                  required: true,
                })}
              />

              <Form.Check
                type="radio"
                label="female"
                name="radio"
                id="radio2"
                value='female'
                {...register("radio", {
                  required: true
                })}
              />
            </div>
            {errors.radio && errors.radio.type === "required" && (
              <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
            )}
          </Col>

          <Col md={12}>
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              {...register("checkbox", {
                required: true,
              })}
            />
            {errors.checkbox && errors.checkbox.type === "required" && (
              <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
            )}
          </Col>
          <Col md={12}>
            <Button type="submit">Submit form</Button>
          </Col>
        </Row>
      </form>
    </>
  )
}

export default EditUser;



