import React, { useState } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import OrderData from '../Data/ECommerce/OrderData.json';
import Paginate from '../../Hook/Paginate';
import { TrashFill, Eye, PencilSquare } from 'react-bootstrap-icons';
import { useSelector } from "react-redux";
import _ from 'underscore';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const Orders = () => {
  const [order, setOrder] = useState("all");
  const [data, setData] = useState(OrderData);
  const [page, setPage] = useState(false);
  const heading = "Orders";
  const taskPerPage = 6;
  const displayTasks = useSelector(state => state.utils.displayTask, _.isEqual)

  const allOrderHandler = () => {
    setOrder("all")
    setData(OrderData)
    setPage(true)
  }

  const shippedOrderHandler = () => {
    setOrder("shipped")
    const newShipped = OrderData.filter((val) => {
      return val.status === "Shipped"
    })
    setData(newShipped)
    setPage(true)
  }

  const awaitingOrderHandler = () => {
    setOrder("awaiting shipment")
    const newAwaiting = OrderData.filter((val) => {
      return val.status === "Awaiting Shipment"
    })
    setData(newAwaiting)
    setPage(true)
  }

  const canceledOrderHandler = () => {
    setOrder("canceled")
    const newCanceled = OrderData.filter((val) => {
      return val.status === "Canceled"
    })
    setData(newCanceled)
    setPage(true)
  }


  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='formlayout'>
        <div className='userlist-box userListing-box ordr'>
          <Row>
            <Col lg={3} className="fom">
              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search"
                />
              </Form>
            </Col>

            <Col lg={7}>
              <div className="boxsize stat">
                <span>Status:</span>
                <div className='bttn'>
                <button className={order === "all" ? "active" : undefined} onClick={allOrderHandler}>All</button>
                <button className={order === "shipped" ? "active" : undefined} onClick={shippedOrderHandler}>Shipped</button>
                <button className={order === "awaiting shipment" ? "active" : undefined} onClick={awaitingOrderHandler}>Awaiting Shipment</button>
                <button className={order === "canceled" ? "active" : undefined} onClick={canceledOrderHandler}>Canceled</button>
              </div></div>
            </Col>

            <Col lg={2}>
              <div className="boxsize exa">
                <button className="exp">Export</button>
                <button className="add">Add Order</button>
              </div>
            </Col>

            <Col className='table-responsive'>
              <Table className='order'>
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {displayTasks.map((val, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{val.orderId}</td>
                        <td>{val.customer}</td>
                        <td>{val.status}</td>
                        <td>{val.amount}</td>
                        <td>{val.date}</td>
                        <td><Eye /> <PencilSquare /> <TrashFill /></td>
                      </tr>
                    </tbody>
                  )
                })}
              </Table>
            </Col>
          </Row>

          <div className='class-pagination'>
            <Paginate
              tasksPerPage={taskPerPage}
              totalTasks={data.length}
              data={data}
              page={page}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Orders;


