import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Plan from '../Data/User/Filter.json'
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import * as Error from '../../Constant/ErrorPage';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';
import { DatePick } from '../Form/Picker';


const AddUser = () => {
  const [plan, setPlan] = useState([]);
  const Navigate = useNavigate();
  const heading = "Add User";

  useEffect(() => {
    setPlan(Plan.plan)
  }, [plan])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = (data) => {
    if (data) {
      Navigate({
        pathname: '/user/tbllisting/1',
        search: "?data=Data Saved Successfully"
      })
    }
  };


  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='formlayout adduser-page'>
        <Row className='mb-3'>
          <Col xs={12} md={6} className='mx-auto'>
            <div className='grid-box'>
              <form className='adduser-vertical-form' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className='form-label'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    {...register("name", {
                      required: true,
                    })}

                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  {errors.name && errors.name.type === "required" && (
                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                  )}
                </Form.Group>
                <div className='radio-btn-style'>
                  <Form.Group className='form-label'>
                    <Form.Label>Gender </Form.Label>
                    <div className='radio-btn-add'>
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        value='male'
                        {...register("formHorizontalRadios", {
                          required: true,
                        })}
                      />
                      <Form.Check
                        type="radio"
                        label="female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        value='female'
                        {...register("formHorizontalRadios", {
                          required: true
                        })}
                      />
                    </div>
                    {errors.formHorizontalRadios && errors.formHorizontalRadios.type === "required" && (
                      <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                    )}
                  </Form.Group>
                </div>

                <Form.Group controlId="dob" className='form-label'>
                  <Form.Label>Select Date</Form.Label>
                  <DatePick addClass={"form-control"} />
                </Form.Group>

                <Form.Group className='form-label'>
                  <Form.Label>Select Plan Type</Form.Label>
                  <Form.Control as="select"  {...register("select", {
                    required: Error.VALIDATE,
                  })} >
                    <option value="">Choose the option</option>

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
                  {errors.select && <p style={{ color: 'red' }}> </p>}
                </Form.Group>

                <Form.Group controlId="validationCustom03" className='form-label'>
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City"   {...register("city", {
                    required: true,
                  })} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                  {errors.city && errors.city.type === "required" && (
                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                  )}
                </Form.Group>

                <Form.Group controlId="validationCustom04" className='form-label'>
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State"   {...register("state", {
                    required: true,
                  })} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                  {errors.state && errors.state.type === "required" && (
                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                  )}
                </Form.Group>

                <button className='form-btn' type="submit">Submit form</button>

              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddUser;



