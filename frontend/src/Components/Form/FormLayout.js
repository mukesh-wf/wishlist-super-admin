import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import './Form.css';
import '../Auth/Login.scss';
import Password from './Password';
import { Fingerprint, Person, EnvelopeFill } from 'react-bootstrap-icons';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const FormLayout = () => {
  const heading = "Form Layout";

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='formlayout'>
        <Row>
          <Col xs={12} md={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Horizental Form</h5>
              </div>
              <Form className='horizental-form'>
                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={3}>Name</Form.Label>
                  <Col md={9}>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Col>
                </Form.Group>

                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={3}>Email</Form.Label>
                  <Col md={9}>
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Form.Group>

                <Form.Group className="form-label row align-items-center icon" >
                  <Form.Label column md={3}>Password</Form.Label>
                  <Col md={9}>
                    <Password />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col md={3}></Col>
                  <Col md={9} className="formlayout">
                    <button className='form-cancel' type="submit">Cancel</button>
                    <button className='form-btn' type="submit">Save</button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Horizontal Form With Icons</h5>
              </div>
              <Form>
                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={3}>Name</Form.Label>
                  <Col md={9}>
                    <span className="form-with-icon">
                      <span ><Person /></span>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={3}>Email</Form.Label>
                  <Col md={9}>
                    <span className="form-with-icon">
                      <span><EnvelopeFill />
                      </span><Form.Control type="email" placeholder="Email" />
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group className='form-label row align-items-center' controlId="formHorizontalPassword">
                  <Form.Label column md={3}>Password</Form.Label>
                  <Col md={9}>
                    <span className="form-with-icon">
                      <span> <Fingerprint /></span><Password />
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col md={3}></Col>
                  <Col md={9} className="formlayout">
                    <button className='form-cancel' type="submit">Cancel</button>
                    <button className='form-btn' type="submit">Save</button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Vertical Form</h5>
              </div>
              <Form className='vertical-form'>
                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={12}>Name</Form.Label>
                  <Col md={12}>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Col>
                </Form.Group>

                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={12}>Email address</Form.Label>
                  <Col md={12}>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Col>
                </Form.Group>

                <Form.Group className='form-label row align-items-center icon vertical-form'>
                  <Form.Label column md={12}>Password</Form.Label>
                  <Col md={12}>
                    <Password />
                  </Col>
                </Form.Group>
               <div className="formlayout">
                <button className='form-cancel' type="submit">Cancel</button>
                <button className='form-btn' type="submit">Save</button>
                </div>
              </Form>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Vertical Form With Icons</h5>
              </div>
              <Form className='vertical-with-icon'>
                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={12}>Name</Form.Label>
                  <Col md={12}>
                    <span className="form-with-icon"><Person />
                      <Form.Control type="text" placeholder="Enter Name" />
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={12}>Email address</Form.Label>
                  <Col md={12}>
                    <span className="form-with-icon"><EnvelopeFill />
                      <Form.Control type="email" placeholder="Enter Email" />
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group className='form-label row align-items-center'>
                  <Form.Label column md={12}>Password</Form.Label>
                  <Col md={12}>
                    <span className="form-with-icon"><Fingerprint /><Password /></span>
                  </Col>
                </Form.Group>
                <div className="formlayout">
                <button className='form-cancel' type="submit">Cancel</button>
                <button className='form-btn' type="submit">Save</button>
                </div>
              </Form>
            </div>
          </Col>

          <Col xs={12}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Multiple Column</h5>
              </div>
              <Form className='multiple-column'>
                <Row>
                  <Col md={6}>
                    <Form.Group className='form-label row align-items-center'>
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group md={6} className='form-label row align-items-center'>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group md={6} className='form-label row align-items-center'>
                      <Form.Control type='email' placeholder='Email' />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group md={6} className='form-label row align-items-center'>
                      <Form.Control type='text' placeholder='City' />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group md={6} className='form-label row align-items-center'>
                      <Form.Control type='text' placeholder='State' />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group md={6} className='form-label row align-items-center'>
                      <Form.Control type='text' placeholder='Country' />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group md={6} className='form-label row align-items-center'>
                      <Form.Control type='number' placeholder='Zip Code' />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group md={6} className='form-label row align-items-center'>
                      <Form.Control type='text' placeholder='Company' />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group md={6} className='form-label row align-items-center'>
                      <Form.Control type='phone' placeholder='Mobile Number' />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="formlayout">
                  <button className='form-cancel' type="Cancel">Cancel</button>
                  <button className='form-btn' type="submit">Save</button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FormLayout;