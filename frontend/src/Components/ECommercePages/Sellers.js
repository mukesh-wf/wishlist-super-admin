import React, { useEffect, useState } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TableData from "../Data/ECommerce/TableData.json";
import Paginate from "../../Hook/Paginate";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import Topbar from "../../Hook/Topbar";
import _ from "underscore";
import MetaTags from "../HeadTag/MetaTags";

const Sellers = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const taskPerPage = 6;
  const heading = "Sellers";
  const displayTasks = useSelector(
    (state) => state.utils.displayTask,
    _.isEqual
  );

  useEffect(() => {
    setActive(true);
    setData(TableData);
    setActive(false);
  }, [active]);

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className="formlayout sellers-page">
        <div className="userlist-box userListing-box ordr">
          <Row className="d-flex justify-content-between align-items-center">
            <Col xs={6}>
              <Form>
                <Form.Control type="search" placeholder="Search" />
              </Form>
            </Col>

            <Col xs={6}>
              <div className="boxsize float-end expp">
                <button>Export</button>
                <button>Add Order</button>
              </div>
            </Col>

            <Col xs={12} className='table-responsive'>
              <Table className="sellers">
                <thead>
                  <tr>
                    <th>Sellers</th>
                    <th>Store</th>
                    <th>Products</th>
                    <th>Wallet Balance</th>
                    <th>Create Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {displayTasks.map((val, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>
                          <img
                            src={val.image}
                            style={{ width: "30px" }}
                            alt="aaaa"
                          />
                          {val.sellers}
                        </td>
                        <td>{val.store}</td>
                        <td>{val.products}</td>
                        <td>{val.walletBalance}</td>
                        <td>{val.createDate}</td>
                        <td>
                          <PencilSquare /> <TrashFill />
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </Col>
          </Row>

          <div className="class-pagination">
            <Paginate
              tasksPerPage={taskPerPage}
              totalTasks={data.length}
              data={data}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Sellers;
