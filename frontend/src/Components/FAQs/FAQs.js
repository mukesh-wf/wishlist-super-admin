import React, { useState } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { EmojiSmile, EmojiFrown } from 'react-bootstrap-icons';
import faqs from '../Data/FAQs/Faqs.json';
import list from '../Data/FAQs/List.json';
import Accordion from 'react-bootstrap/Accordion';
import '../../App.css';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const FAQs = () => {
    const [active, setActive] = useState(-1);;
    const heading = "Frequently Asked Questions";

    const handleColor = (i) => {
        setActive(i)
    }


    return (
        <>
            <MetaTags title={heading} />
            <Topbar heading={heading} />

            <Container className='main-container faq-page'>
                <Row className='grid-box-row'>
                    <Col md={3}>
                        <div className='grid-box'>
                            <Form>
                                <Form.Control
                                    type="search"
                                    placeholder="Browse by Topic"
                                />
                            </Form>
                            <div className='faq-left'>
                                <ul>
                                    {list.map((item, i) => {
                                        return (
                                            <li
                                                key={item.id}
                                                style={{ color: active === i ? item.color : '', cursor: "pointer", borderLeft: active === i ? `3px solid ${item.color}` : "" }}
                                                onClick={() => handleColor(i)}
                                            >
                                                {item.title}
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>

                        <div className='grid-box text-center'>
                            <img className='mb-4' src='https://demo.dashboardmarket.com/strikingdash-vue/img/support.e859a732.svg' alt='men' />
                            <h4>Not finding the help you need?</h4>
                            <Button className='form-btn' variant='info'>Contact Suupport</Button>
                        </div>
                    </Col>

                    <Col md={9}>
                        <div className='grid-box'>
                            <h5 className='mb-4'>Using Applications</h5>
                            {faqs.map((value, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Accordion>
                                            <Accordion.Item eventKey={value.id}>
                                                <Accordion.Header>{value.ques}</Accordion.Header>
                                                <Accordion.Body>
                                                    <p style={{ textAlign: 'justify' }}>{value.ans}</p>
                                                    <h6>Was this article helpful?</h6>
                                                    <button className='form-btn'><EmojiSmile /> Yes</button>
                                                    <button className='form-btn foem-cancel'><EmojiFrown /> No</button>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default FAQs;