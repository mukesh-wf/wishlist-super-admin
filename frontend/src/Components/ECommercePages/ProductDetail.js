import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Github, Cart, Dribbble, Share, Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import { productDatas } from './ProductDataFile/ProductsDatas';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import ModalImage from "react-modal-image";
import HeartIcon from './HeartIcon';
import { Rate } from 'rsuite';
import './Ecom.css';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const ProductDetail = () => {
  const [display, setDisplay] = useState([]);
  const [image, setImage] = useState("");
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(false);
  const heading = "Product Details";


  useEffect(() => {
    if (productId === undefined || productId === null) {
      navigate("/eCommerce/productDetail/1")
    } else {
      const data = productDatas.find((e) => e.id === parseInt(productId))
      setDisplay([data])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, productId])

  const click = (e, id) => {
    setImage(e)
    navigate({
      pathname: "/eCommerce/productDetail/" + id
    })
    const data = productDatas.find((val) => val.img === e)
    setDisplay([data])
  }

  const inc = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1)
      setCount(!count)
    }
  }

  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setCount(!count)
    }
  }


  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='productdetail-page'>
        <Row className='grid-box'>
          {display.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <Col md={5} className='col'>
                    <div className='modal-img'>
                      {image !== ""
                        ?
                        <ModalImage
                          small={image}
                          large={image}
                          alt={val.name}
                        />
                        :
                        <ModalImage
                          small={val.img}
                          large={val.img}
                          alt={val.name}
                        />
                      }
                    </div>

                    <div className='col-list' >
                      {productDatas.map((value, index) => {
                        if (value.category === val.category && value.id !== parseInt(productId)) {
                          return (
                            <React.Fragment key={index}>
                              <img src={value.img} alt="sss" onClick={() => click(value.img, value.id)} className='w-25 cursorPointer' />
                            </React.Fragment>
                          )
                        }
                        return null
                      })}
                    </div>
                </Col>

                <Col md={6} className="details">
                    <Card>
                      <Card.Body>
                        <Card.Title className='card-head'><h2>{val.name}</h2></Card.Title>
                        <Card.Subtitle className="">
                          <small><Rate size='xs' max={val.star} readOnly /> {val.star}</small>
                          <span className='review'>{val.starDes} Reviews</span>
                        </Card.Subtitle>

                        <Card.Text>
                          <span className='brand-text'>Brand: </span>
                          <span className='brand-value'>{val.brand}</span>
                        </Card.Text>

                        <Card.Title><span className='card-price-detail'>$ {val.price}</span></Card.Title>
                        <Card.Text>
                          <del className='card-old-price-detail'>{val.oldPrice}</del>
                          <span className='off-value'> {val.off}</span>
                        </Card.Text>
                        <Card.Text className='card-text-para'>{val.des}</Card.Text>
                        <Card.Text>
                          <p className='my-0'><span className='card-status'>Available: </span> <span className='card-status-value'>in Stock</span></p>
                          <p className='my-0'><span className='card-status'>Shopping: </span> <span className='shop-value'>Free</span></p>
                        </Card.Text>
                        <Card.Text className='my-4 product-quantity'>
                          <span className='card-status'>Quantity:</span>
                          <div className='quantity-button'>
                            <button onClick={dec} className='cursorPointer'>-</button>
                            <button className='product-value'>{quantity}</button>
                            <button onClick={inc} className='cursorPointer'>+</button>
                          </div>
                        </Card.Text>
                        <Card.Text className='button-social-icon'>
                          <button className='form-btn'>Buy Now</button>
                          <button className='form-cancel'><Cart /> Add to Cart</button>
                          <div className='produt-detail-social'>
                            <HeartIcon /> 
                            <Share />
                            <Facebook />
                              <Instagram />
                              <Dribbble />
                              <Twitter />
                              <Github />
                            </div>
                        </Card.Text>
                        <Card.Text className='mt-4'>
                          <p className='my-0'>
                            <span className='card-status'>Category:</span>
                            <span className='shop-value'> {val.category}</span>
                          </p>
                          <p className='my-0'>
                            <span className='card-status'>Tags:</span>
                            <span className='shop-value'> Red, Blue, Green</span>
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
              </React.Fragment>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default ProductDetail;