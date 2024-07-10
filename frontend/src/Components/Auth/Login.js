import React, { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import LoginJson from "../Data/Auth/auth.json";
import * as Error from "../../Constant/ErrorPage";
import { utils } from "../Store/Utils";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import visible from '../Image/eye.svg';
import visibleoff from '../Image/eye-slash.svg';
import LoginLogo from "../Image/login-logo.png";
import "./Login.scss";
const Login = () => {
    const {
        register,
        formState: { errors, isSubmitted },
        handleSubmit, reset, setError, clearErrors
    } = useForm({
        criteriaMode: "all"
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const [message, setMessage] = useState(searchParams.get('data'));
    const [hide, setHide] = useState(false);
    const check = true;
    useEffect(() => {
        reset({
            username: LoginJson.username,
            password: LoginJson.password
        })
        setTimeout(() => {
            setMessage('')
        }, 6000);
        navigate('/')
    }, [message, reset, navigate])

    const onSubmit = (data) => {
        // console.log("Loginjosn", LoginJson, "data", data);
        if (
            data.username === LoginJson.username &&
            data.password === LoginJson.password
        ) {
            navigate("/dashboard");
            dispatch(utils.handleCheck(check))
            
            localStorage.setItem("username", data.username);
            localStorage.setItem("password", data.password);


            // localStorage.setItem("name", LoginJson.name);
            localStorage.setItem("isLogin", true);
            dispatch(
                utils.loginPage({
                    username: data.username,
                    password: data.password
                })
            );
        }
        else {
            setMessage("Email & Password is invalid")
        }
    };

    const toggle = () => {
        setHide((prev) => !prev);
    };


    return (
        <section className="login-form">
            <div className="siteLogo">
                <a href="/"><img src={LoginLogo} alt="Logo" /></a>
            </div>

            <div className="loginForm-inner">
                {message &&
                    <Alert variant="success">
                        {message}
                    </Alert>
                }

                <h3>Sign in to <span> Admin </span></h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3 position-relative">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            {...register("username", {
                                required: true,
                                // pattern:
                                //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                onChange(event) {
                                    // console.log("event", event.target.value);
                                    if (event.target.value.length > 16) {
                                        setError("username", {
                                            types: {
                                                maxLength: "User Name shoudn't be grater than ten"
                                            }
                                        }, { shouldFocus: true })
                                    }
                                    else if (event.target.value.length === 0) {
                                        setError("username", {
                                            types: {
                                                required: "Username is required*"
                                            }
                                        })
                                    }
                                    else {
                                        clearErrors("username");
                                    }
                                },
                                maxLength: 16
                            })}
                            maxLength={17}
                        />
                        {errors.username && errors.username.types.maxLength && <span className="position-absolute" color="red" style={{ fontSize: "12.6px", color: "red", top: "66px", left: "10px" }}>{errors.username.types.maxLength}
                        </span>}
                        {errors.username && errors.username.types.required && <span className="position-absolute" color="red" style={{ fontSize: "12.6px", color: "red", top: "66px", left: "10px" }}>{errors.username.types.required}
                        </span>}
                    </Form.Group>

                    {/* {errors.email &&
                        errors.email.type === "required" && (
                            <p className="error">{Error.VALIDATE}</p>
                        )}

                    {errors.email &&
                        errors.email.type === "pattern" && (
                            <p className="error">{Error.VALIDATEAGAIN}</p>
                        )} */}

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type={!hide ? "password" : "text"}
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                                onChange(event) {
                                    if (event.target.value.length === 0) {
                                        setError("password", {
                                            types: {
                                                required: "Password is required*"
                                            }
                                        })
                                    }
                                    else {
                                        clearErrors("password");
                                    }
                                }
                            })}
                        />
                        <i className='passwordvisible' style={{ cursor: 'pointer' }} onClick={toggle}>
                            {hide ? <img src={visible} alt="visible" /> : <img src={visibleoff} alt="visible off" />}
                        </i>
                        {errors.password && errors.password.types.required && <span className="position-absolute" color="red" style={{ fontSize: "12.6px", color: "red", top: "66px", left: "10px" }}>{errors.password.types.required}
                        </span>}
                    </Form.Group>

                    {/* {errors.password && (
                        <p className="error">{Error.VALIDATE}</p>
                    )} */}

                    <Form.Group className="mb-3" >
                        <Form.Check
                            {...register("checkbox", {
                                required: true,
                                onChange(event) {
                                    if (!event.target.checked) setError("checkbox", {
                                        types: {
                                            required: "Please check this*"
                                        }
                                    })
                                    else clearErrors("checkbox");
                                }
                            })}
                            type="checkbox"
                            label="Check me out"
                            id="checkbox"
                        />
                        {/* {errors.Checkbox && (
                            <p className="error">{Error.VALIDATE}</p>
                        )} */}
                        {errors.checkbox && errors.checkbox.types.required && <span className="position-absolute" color="red" style={{ fontSize: "12.6px", color: "red", top: "-4px", right: "180px" }}>{errors.checkbox.types.required}
                        </span>}
                        <Form.Text className="forget-password-text">
                            <NavLink to="/forgetpassword">Forgot password?</NavLink>
                        </Form.Text>
                    </Form.Group>

                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
