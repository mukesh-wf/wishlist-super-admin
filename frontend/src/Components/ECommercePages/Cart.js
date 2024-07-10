import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import cart from '../Data/ECommerce/Cart.json';
import { TrashFill, EmojiFrown, ArrowRight } from 'react-bootstrap-icons';
import Topbar from '../../Hook/Topbar';
import './Ecom.css';
import MetaTags from '../HeadTag/MetaTags';

const Cart = () => {
  const [count, setCount] = useState(false);
  const heading = "Shopping Cart";

  useEffect(() => {

  }, [count])

  const inc = (id) => {
    const data = cart.find((e) => e.id === id)
    data.quantity = data.quantity + 1
    setCount(!count)
  }

  const dec = (id, quant) => {
    if (quant > 1) {
      const data = cart.find((e) => e.id === id)
      data.quantity = data.quantity - 1
      setCount(!count)
    }
  }

  const remove = (id) => {
    cart.splice(id, 1)
    setCount(!count)
  }

  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum = sum + cart[i].price * cart[i].quantity
  }


  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='formlayout cart-page'>
        {cart.length === 0
          ?
          <div className='text-center'>
            <img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg' alt='aaa' style={{ width: "500px" }} />
            <h4>Your Cart is Empty <EmojiFrown /></h4>
          </div>
          :
          <Row className='mb-3'>
            <Col md={12} xxl={9}>
              <div className='grid-box'>
                <div className='table-responsive'>
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th></th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  {cart.map((val, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td><img src={val.img} alt="aaa" style={{ width: "100px" }} /></td>
                          <td className='text-start'><b>{val.name}</b> <br /> <b>Size:</b> {val.size} <b>Color:</b> {val.color}</td>
                          <td>${val.price}</td>
                          <td className='cartButton'>
                            <button onClick={() => dec(val.id, val.quantity)}>-</button>
                            {val.quantity}
                            <button onClick={() => inc(val.id)}>+</button>
                          </td>
                          <td>{parseInt(val.price) * val.quantity}</td>
                          <td><TrashFill onClick={() => remove(index)} /></td>
                        </tr>
                      </tbody>
                    )
                  })}
                </Table>
                </div>
              </div>
            </Col>

            <Col md={7} xxl={3} className="mx-auto alignment-left">
              <div className='grid-box'>
                <h5>Order Summery</h5>
                <div className='table-responsive'>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Subtotal:</td>
                        <td>${sum}</td>
                      </tr>
                      <tr>
                        <td>Discount:</td>
                        <td>$-20</td>
                      </tr>
                      <tr>
                        <td>Shipping Charge:</td>
                        <td>$30</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <Form >
                            <Form.Select aria-label="select Coupon" className='mb-3'>
                              <option>select Coupon</option>
                              <option value="1">Coupon 1</option>
                              <option value="2">Coupon 2</option>
                              <option value="3">Coupon 3</option>
                            </Form.Select>
                            <Form.Group className='d-flex justify-content-center'>
                              <Form.Control type="text" placeholder='Promo Code' />
                              <button type='button' className='form-btn'>Apply</button>
                            </Form.Group>
                          </Form>
                        </td>
                      </tr>
                      <tr>
                        <td>Total:</td>
                        <td>${parseInt(sum) - 20 + 30}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <button className='w-100 form-btn mt-3'>Proceed to Checkout <ArrowRight /></button>
              </div>
            </Col>
          </Row>
        }
      </Container>
    </>
  )
}

export default Cart;