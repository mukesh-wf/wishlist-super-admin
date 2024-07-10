import React from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import LogoImg from "../Image/logo.png";
import barCode from '../Image/BarCode.png';
import { Send, Download, Printer } from 'react-bootstrap-icons';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const Invoice = () => {
  const heading = "Invoice";

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='formlayout invoice-page'>
        <Row className='grid-box'>
          <Col md={12}>
            <div className='d-md-flex align-items-center justify-content-between invoice'>
              <div className="brand-name">
                <img alt="Site Logo" src={LogoImg} />
              </div>

              <div className='text-md-end column-4'>
                <p>Admin Company</p>
                <p>800 Silicon Valley, Krane 201</p>
                <p>San Martin, AA 20154, USA</p>
                <p>Reg. number : 21035410002135</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <Row className='grid-box-rows d-flex align-items-center justify-content-between my-5'>
              <Col md={4}>
                <div className='column-4'>
                  <h4>Invoice</h4>
                  <p>No. #325142</p>
                  <p>Date: 12 Jan, 2020</p>
                </div>
              </Col>

              <Col md={4}>
                <div className='text-center'>
                  <img src={barCode} alt="barCode" />
                  <p>123652145023320</p>
                </div>
              </Col>

              <Col md={4}>
                <div className='column-4 text-md-end'>
                  <h5>INVOICE TO:</h5>
                  <p>Michal Jones</p>
                  <p>800 Silicon Valley, Krane 201</p>
                  <p>San Martin, AA 20154, USA</p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={12}>
            <div className='table-responsive'>
              <Table >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Details</th>
                    <th>Price Per Unit</th>
                    <th>Quantity</th>
                    <th>Order Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Fiber Gaming Chair
                      <p>Size: Large Color: Red</p>
                    </td>
                    <td>$350.99</td>
                    <td>2</td>
                    <td>$701.98</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Fiber Teacher Chair
                      <p>Size: Medium Color: Gray</p>
                    </td>
                    <td>$150.66</td>
                    <td>3</td>
                    <td>$451.98</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className='total'>
              <p>Subtotal: <span>$501.65</span></p>
              <p>Discount: <span>$-30</span></p>
              <p>Shipping Charge: <span>$40</span></p>
              <h5>Total: <span>$511.65</span></h5>
            </div>
          </Col>

          <Col md={12}>
            <div className='float-end mt-2 me-0'>
              <button className='form-cancel'><Printer />Print </button>
              <button className='form-cancel'><Send />Send Invoice </button>
              <button className='form-btn'><Download />Download </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Invoice;


