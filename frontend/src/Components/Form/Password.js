import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import visible from '../Image/eye.svg'
import visibleoff from '../Image/eye-slash.svg'
import { useForm } from "react-hook-form";
import "../Auth/Login.scss"

const Password = () => {
    const [hide, setHide] = useState(false)

    const {
        register,
    } = useForm();


    const toggle = () => {
        setHide((prev) => !prev);
    };


    return (
        <>
            <Form.Control
                type={!hide ? "password" : "text"}
                placeholder="Password"
                {...register("password", {
                    required: true,
                })}

            />
            <i className='passwordvisible' onClick={toggle}>
                {hide ? <img src={visible} alt='visible' /> : <img src={visibleoff} alt='visible off' />}
            </i>
        </>
    )
}

export default Password