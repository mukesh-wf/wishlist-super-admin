import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { Rate } from 'rsuite';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeartIcon from '../../HeartIcon';
import Empty from '../../Common/Empty/Index';
import '../../Ecom.css';

const GridView = ({ grid, DataFound }) => {
    const navigate = useNavigate();
    const selector = useSelector((state) => state.utils.Filter);

    useEffect(() => {
        navigate({
            pathname: "/eCommerce/gridview",
            search: "?product=" + selector + ""
        })
    }, [selector, navigate])


    return (
        <>
            <Row className='grid-box-row productgrid-view'>
                {DataFound
                    ?
                    grid.map((val, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Col lg={6} xl={4}>
                                    <div className='grid-box product'>
                                        <Card>
                                            <NavLink to={"/eCommerce/productDetail/" + val.id}><Card.Img className='card-img' src={val.img} /></NavLink>
                                            <Card.Body className='product'>
                                                <Card.Title className='card-heading'><NavLink to={"/eCommerce/productDetail/" + val.id}>{val.name}</NavLink></Card.Title>
                                                <Card.Text>
                                                    <span className='card-price'>${val.price}</span>
                                                    <del className='old-price'>{val.oldPrice}</del>
                                                    <span className='off-value'>{val.off}</span>
                                                </Card.Text>
                                                <Card.Subtitle className="mb-2 star">
                                                    <small><Rate size='xs' max={val.star} readOnly className='starColor'/> {val.star}</small> 
                                                    <span className='review'>{val.starDes} Reviews <HeartIcon /></span>
                                                </Card.Subtitle>
                                                <div className='add-card-view'>
                                                    <button className="form-btn" size='sm'><Cart /> Add to Cart</button>
                                                    <button className='form-cancel' size='sm'>View</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </React.Fragment>
                        )
                    })
                    :
                    <Empty />}
            </Row>
        </>
    )
}

export default GridView