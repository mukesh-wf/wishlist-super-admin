import React, { useEffect, useState } from 'react';
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import { Form, Row, Col, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Settings from '../Data/Setting/Setting.json';
import { FileUploader } from "react-drag-drop-files";
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';



const Setting = () => {
    const {
        register, reset,
        formState: { errors },
    } = useForm();
    const [tz, setTz] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    );

    const fileTypes = ["JPEG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const data = localStorage.getItem("i18nextLng");
    const heading = "Setting";

    useEffect(() => {
        reset({ setTz: setTz(Settings[0].timeZone), url: Settings[0].url, websiteName: Settings[0].website_name, language: data ? data : Settings[0].lng })
    }, [reset, data])

    const handleChange = (file) => {
        setFile(file);
    };


    return (
        <>
        <MetaTags title={heading} />
        <Topbar heading={heading} />
        <Container className='setting-page'>
            <Row>
                <Col xs={12} md={6} className='mx-auto'>
                    <div className='grid-box'>
                        <Form.Group className='setting-section'>
                            <Form.Label>Select Time Zone</Form.Label>
                            <TimezoneSelect
                                value={tz}
                                onChange={setTz}
                                timezones={{
                                    ...allTimezones
                                }}
                            />
                        </Form.Group>

                        <Form.Group className='setting-section'>
                            <Form.Label>Url</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("url", {
                                    required: true,
                                })}
                            />
                            {errors.url && errors.url.type === "required" && (
                                <p style={{ color: "red", fontSize: "6px" }}>{Error.VALIDATE}</p>
                            )}
                        </Form.Group>

                        <Form.Group className='setting-section'>
                            <Form.Label>Website Name</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("websiteName", {
                                    required: true,
                                })}
                            />
                            {errors.websiteName && errors.websiteName.type === "required" && (
                                <p style={{ color: "red", fontSize: "6px" }}>{Error.VALIDATE}</p>
                            )}
                        </Form.Group>

                        <Form.Group className='setting-section'>
                            <Form.Label>Logo</Form.Label>
                            <FileUploader
                                multiple={true}
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                            />
                        </Form.Group>
                        <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>

                        <button className='form-btn' type='submit'>Submit</button>
                    </div>
                </Col>
            </Row>
        </Container>
     </>
    )
}

export default Setting