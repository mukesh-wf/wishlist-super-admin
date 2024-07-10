import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Justify } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const StoreDetail = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const name = searchParams.get('name');
  console.log("nnnnnnnn----- ", name)
  const [storeInfo, setStoreInfo] = useState([]);
  const [storeUser, setStoreUser] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState([]);
  const [totalquota, setTotalQuota] = useState([]);
  const [monthlyQuota, setMonthlyQuota] = useState([]);



  console.log("storeUser ---- ", storeUser.length)
  console.log("wishlistItems ---- ", wishlistItems)
  console.log("totalRevenue ---- ", totalRevenue)

  useEffect(() => {
    async function fetchdata() {
      await getStoreDetail()
    }
    fetchdata();

  }, [])

  const getStoreDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:7000/store/getStoreDetail?data=${name}`, {
        withCredentials: true,
        headers: {
          "Content-Type": 'application/json'
        }
      })
      setStoreInfo(res.data.storeInfo);
      setStoreUser(res.data.wishlistUsers);
      setWishlistItems(res.data.itemsResult);
      setTotalRevenue(res.data.TotalRevenue.toFixed(2));
      setTotalQuota(res.data.planQuota);
      setMonthlyQuota(res.data.month_Wise_item);
      console.log("rrrrr1111----", res.data)
    } catch (error) {
      console.log("errr", error)
    }
  }

  return (
    <>

      {/* <Container className='main-container socialmedia-page'>
        <h5> Store-Name : {storeInfo.shop_name}</h5>
        <Row className='grid-box-row'>
          <Col xs={12} xxl={8} >
            <div style={{ background: '#d9d9e7' }}>
              <div>
                <h5>Store-Information : </h5>
              </div>

              <Row>
                <Col xs={12} xxl={4} >
                  <div>
                    <p> <b>Store-Owner</b> : {storeInfo.store_owner} </p>
                    <p><b>Country </b>: {storeInfo.country} </p>
                    <p><b>Status</b> : {storeInfo.status} </p>
                  </div>
                </Col>
                <Col xs={12} xxl={7} >
                  <div>
                    <p><b>Store-Email </b> : {storeInfo.shop_email} </p>
                    <p><b> Phone</b> : {storeInfo.shop_phone} </p>
                  </div>
                </Col>
              </Row>            



            </div>
          </Col>

          <Col xs={12} xxl={4}>
            <div className='grid-box' style={{ background: '#d9d9e7' }}>
              <div className='grid-box-heading'>
                <h3>Plan :</h3>
                <h5>{storeInfo.active_plan_name} </h5> 
                </div>  
            </div>

            <div className='grid-box' style={{ background: '#d9d9e7' }}>
              <div className='grid-box-heading'>
                <h3>Quota:</h3>
                </div>  
            </div>
          </Col>

        </Row>
      </Container> */}

      <Container className='main-container socialmedia-page'>
        <h5 className="text-center">Store-Name : {storeInfo.shop_name}</h5>
        <Row className='grid-box-row justify-content-center'>
          <Col xs={12} xxl={8} className="d-flex align-items-stretch justify-content-center">
            <div style={{ background: '#d9d9e7', width: '100%', padding: '20px', borderRadius: '10px' }}>
              <div className="text-center mb-3">
                <h5>Store-Information</h5>
              </div>
              <Row className="justify-content-center">
                <Col xs={12} xxl={4} className="text-center mb-3">
                  <div>
                    <p><b>Store-Owner:</b> {storeInfo.store_owner}</p>
                    <p><b>Store-Email:</b> {storeInfo.shop_email}</p>
                  </div>
                </Col>
                <Col xs={12} xxl={7} className="text-center mb-3">
                  <div>
                    <p><b>Status:</b> {storeInfo.status}</p>
                    <p><b>Country:</b> {storeInfo.country}</p>
                    <p><b>Phone:</b> {storeInfo.shop_phone}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={12} xxl={4} className="d-flex flex-column justify-content-between">
            <div className='grid-box mb-3' style={{ background: '#d9d9e7', padding: '20px', borderRadius: '10px' }}>
              <div className='grid-box-heading text-center'>
                <h3>Plan:</h3>
                <h5>{storeInfo.active_plan_name}</h5>
              </div>
            </div>

            <div className='grid-box' style={{ background: '#d9d9e7', padding: '20px', borderRadius: '10px' }}>
              <div className='grid-box-heading text-center'>
                <h3>Quota:</h3>
                <div>
                  {storeInfo.active_plan_name === "Premium" ? (
                    ''
                  ) : storeInfo.active_plan_name === "null" ? (
                    ''
                  ) : storeInfo.active_plan_name === "Free" || storeInfo.active_plan_name === "Basic" ? (
                    <p>{((monthlyQuota / totalquota) * 100).toFixed(2)}% used</p>

                  ) : ''}
                </div>
                <div>
                  {storeInfo.active_plan_name === "Premium" ? (
                    <p>Unlimited</p>
                  ) : storeInfo.active_plan_name === "null" ? (
                   '0'
                  ) : storeInfo.active_plan_name === "Free" || storeInfo.active_plan_name === "Basic" ?
                    // (<p>{((wishlistItems))} / {totalquota}</p>) 
                    (<p>{monthlyQuota} / {totalquota}</p>)
                    : ''}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='grid-box-row justify-content-center mt-3'>
          <Col xs={12} xxl={4} className="d-flex align-items-center justify-content-center">
            <div style={{ background: '#d9d9e7', width: '100%', padding: '20px', borderRadius: '10px' }}>
              <div className="text-center mb-3">
                <h5> Total Users </h5>
                <p>{storeUser.length}</p>
              </div>

            </div>
          </Col>

          <Col xs={12} xxl={4} className="d-flex align-items-center justify-content-center">
            <div style={{ background: '#d9d9e7', width: '100%', padding: '20px', borderRadius: '10px' }}>
              <div className="text-center mb-3">
                <h5>Total Wishlist Items</h5>
                <p>{wishlistItems}</p>
              </div>

            </div>
          </Col>

          <Col xs={12} xxl={4} className="d-flex align-items-center justify-content-center">
            <div style={{ background: '#d9d9e7', width: '100%', padding: '20px', borderRadius: '10px' }}>
              <div className="text-center mb-3">
                <h5> Total Revenue </h5>
                <p>{totalRevenue}</p>
              </div>

            </div>
          </Col>


        </Row>
      </Container>


    </>
  )
}

export default StoreDetail