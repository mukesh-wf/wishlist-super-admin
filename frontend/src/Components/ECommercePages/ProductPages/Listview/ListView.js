import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { Rate } from 'rsuite';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import HeartIcon from '../../HeartIcon';
import Empty from '../../Common/Empty/Index';
import '../../Ecom.css';


const ListView = ({ list, DataFound }) => {
    const navigate = useNavigate()
    const selector = useSelector((state) => state.utils.Filter)

    useEffect(() => {
        navigate({
            pathname: "/eCommerce/listview",
            search: "?product=" + selector + ""
        })
    }, [selector, navigate])


    return (
        <>
            {DataFound
                ?
                list.map((val, index) => {
                    return (
                        <Row className='grid-box-row product-listview' key={index}>
                            <Col >
                                <div className='grid-box'>
                                    <Row>
                                        <Col md={3}>
                                            <NavLink to={"/eCommerce/productDetail/" + val.id}><img src={val.img} alt="aaaa" className='card-img' /></NavLink>
                                        </Col>

                                        <Col md={6} className='listName'>
                                            <h5 className='mt-2'><NavLink to={"/eCommerce/productDetail/" + val.id}>{val.name}</NavLink></h5>
                                            <p><small>{val.des}</small></p>
                                        </Col>

                                        <Col md={3} className='p-0'>
                                            <div className='mb-0'>
                                                <span className='card-price'>${val.price}</span>
                                                <del className='old-price'>{val.oldPrice}</del>
                                                <span className='off-value'>{val.off}</span>
                                            </div>
                                            <div><Rate size='xs' max={val.star} readOnly /><small><b> {val.star}</b> </small></div>
                                            <div className='review'>{val.starDes} Reviews<HeartIcon /></div>
                                            <button className='form-btn' size='sm'><Cart /> Add to Cart</button>
                                            <button className='form-cancel' size='sm'>View</button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    )
                })
                :
                <Empty />
            }
        </>
    )
}

export default ListView