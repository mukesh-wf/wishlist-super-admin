import React, { useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Settings from '../Data/Setting/Setting.json';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    const navigate = useNavigate()
    const {
        handleSubmit,
        register, reset,
        formState: { errors },
    } = useForm();

    const data = localStorage.getItem("i18nextLng")


    useEffect(() => {
        reset({ url: Settings[0].url, websiteName: Settings[0].website_name, language: data ? data : Settings[0].lng })
    }, [reset, data])

    const onSubmit = (data) => {
        navigate({
            pathname: '/setting',
            search: "?lng=" + data.language
        })
    }


    return (
        <>
            <div className='grid-box-heading'>
                <h4>Edit Profile</h4>
                <h5>Set Up Your Personal Information</h5>
            </div>
            <Container>
                <Row className='mb-3'>
                    <Col xs={12} md={12}>
                            <form onSubmit={handleSubmit(onSubmit)} className="profile">
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    {errors.name && errors.name.type === "required" && (
                                        <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                    )}
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        {...register("contactNumber", {
                                            required: true,
                                        })}
                                    />
                                    {errors.contactNumber && errors.contactNumber.type === "required" && (
                                        <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                    )}
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">India</option>
                                        <option value="2">Bangladesh</option>
                                        <option value="3">China</option>
                                        <option value="4">USA</option>
                                        <option value="5">Canada</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Label>City</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">Chandigarh </option>
                                        <option value="2">Mohali</option>
                                        <option value="3">Jalandhar</option>
                                        <option value="4">Ludhiana</option>
                                    </Form.Select>
                                    {errors.url && errors.url.type === "required" && (
                                        <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                    )}
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Label>Website Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        {...register("websiteName", {
                                            required: true,
                                        })}
                                    />
                                    {errors.websiteName && errors.websiteName.type === "required" && (
                                        <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>User Bio</Form.Label>
                                    <Form.Control as="textarea" rows={3} />

                                    {errors.langauge && errors.langauge.type === "required" && (
                                        <p style={{ color: "red", fontSize: "12px" }}>{Error.VALIDATE}</p>
                                    )}
                                </Form.Group>

                                <button className='form-btn' type='submit'>Submit</button>
                            </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile;



