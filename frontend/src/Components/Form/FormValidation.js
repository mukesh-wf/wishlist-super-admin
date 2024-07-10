import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import './Form.css';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import * as Error from '../../Constant/ErrorPage';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const FormValidation = () => {
    const heading = "Form Validation";

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm()

    const onSubmit = (event) => {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
    };

    const resetHandle = () => {
        reset({
            fname: "",
            lname: "",
            uname: "",
            city: "",
            state: "",
            zip: "",
            cname: "",
            company: "",
            phone: "",
            check: ""
        })
    }

    return (
        <>
            <MetaTags title={heading} />
            <Topbar heading={heading} />

            <Container className='formlayout formvalidation-page'>
                <div className='grid-box'>
                    <div className='grid-box-heading'>
                        <h5>Custom Styles</h5>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='vertical-form'>
                        <Row className="form-label">
                            <Form.Group as={Col} md="4">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First name"
                                    {...register("fname", {
                                        required: true,
                                    })}
                                />
                                {errors.fname && errors.fname.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Last name"
                                    {...register("lname", {
                                        required: true,
                                    })}
                                />
                                {errors.lname && errors.lname.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} md="4" className='validation-username'>
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        {...register("uname", {
                                            required: true,
                                        })}
                                    />
                                </InputGroup>
                                {errors.uname && errors.uname.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>
                        </Row>

                        <Row className="form-label">
                            <Form.Group as={Col} md="4">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    {...register("city", {
                                        required: true,
                                    })}
                                />
                                {errors.city && errors.city.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="State"
                                    {...register("state", {
                                        required: true,
                                    })}
                                />
                                {errors.state && errors.state.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Zip"
                                    {...register("zip", {
                                        required: true,
                                    })}
                                />
                                {errors.zip && errors.zip.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>
                    
                        </Row>

                        <Row className="form-label">
                            <Form.Group as={Col} md="4">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Country name"
                                    {...register("cname", {
                                        required: true,
                                    })}
                                />
                                {errors.cname && errors.cname.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Company</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Company name"
                                    {...register("company", {
                                        required: true,
                                    })}
                                />
                                {errors.company && errors.company.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="phone"
                                    placeholder="Phone no."
                                    {...register("phone", {
                                        required: true,
                                    })}
                                />
                                {errors.phone && errors.phone.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>
                        </Row>
                        <Row className="form-label form-agreement">
                            <Form.Group className='col-md-11'>
                                <Form.Check
                                    label="Agree to terms and conditions"
                                    feedbackType="invalid"
                                    {...register("check", {
                                        required: true,
                                    })}
                                />
                                {errors.check && errors.check.type === "required" && (
                                    <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                )}
                            </Form.Group>
                        </Row>
                        <Row className='mx-0'>
                            <Col md={11}>
                                <div className="validation">
                                    <button className='form-btn' type="submit">Submit</button>
                                    <button className='form-cancel' type='button' onClick={handleSubmit(resetHandle)}>Reset</button>
                                </div> 
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default FormValidation;