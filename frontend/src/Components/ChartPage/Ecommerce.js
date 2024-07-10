import React, { useState } from "react";
import { Container, Col, Row, Table, Card } from "react-bootstrap";
import "./Chartpage.css";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import data from "../Data/Chart/Bar.json";
import { BarChart, Bar, Tooltip, LineChart, Line } from "recharts";
import RevenueDeviceData from "../Data/Chart/RevenueDeviceData.json";
import RevenueGenData from "../Data/Chart/RevenueGenData.json";
import TotalRevenueData from "../Data/Chart/TotalRevenueData.json";
import SaleLocationData from "../Data/Chart/SaleLocationData.json";
import { SellingProductData } from "../Data/Chart/SellingProductData.js";
import "react-calendar/dist/Calendar.css";
import Topbar from "../../Hook/Topbar";
import { DoubleLine } from "../../Hook/Recharts/LineCharts";
import PieCharts from "../../Hook/Recharts/PieCharts";
import MetaTags from "../HeadTag/MetaTags";

const Ecommerce = () => {
  const [showData, setShowData] = useState("weekData");
  const [revenueGeneratedData, setRevenueGenerated] = useState("weekData");
  const [sellingProductData, setSellingProductData] = useState("todayData");
  const [saleLocationData, setSaleLocationData] = useState("todayData");
  const [revenueByDeviceData, setRevenueByDeviceData] = useState("weekData");
  const heading = "Ecommerce Dashboard";
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const weekHandler = () => {
    setShowData("weekData");
  };

  const monthHandler = () => {
    setShowData("monthData");
  };

  const yearHandler = () => {
    setShowData("yearData");
  };

  const weekRevenueHandler = () => {
    setRevenueGenerated("weekData");
  };

  const monthRevenueHandler = () => {
    setRevenueGenerated("monthData");
  };

  const yearRevenueHandler = () => {
    setRevenueGenerated("yearData");
  };

  const todaySellingProductHandler = () => {
    setSellingProductData("todayData");
  };

  const weekSellingProductHandler = () => {
    setSellingProductData("weekData");
  };

  const monthSellingProductHandler = () => {
    setSellingProductData("monthData");
  };

  const yearSellingProductHandler = () => {
    setSellingProductData("yearData");
  };

  const todaySaleLocationHandler = () => {
    setSaleLocationData("todayData");
  };

  const weekSaleLocationHandler = () => {
    setSaleLocationData("weekData");
  };

  const monthSaleLocationHandler = () => {
    setSaleLocationData("monthData");
  };

  const yearSaleLocationHandler = () => {
    setSaleLocationData("yearData");
  };

  const weekRevenueByDeviceHandler = () => {
    setRevenueByDeviceData("weekData");
  };

  const monthRevenueByDeviceHandler = () => {
    setRevenueByDeviceData("monthData");
  };

  const yearRevenueByDeviceHandler = () => {
    setRevenueByDeviceData("yearData");
  };

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className="main-container">
        <Row className="grid-box-row">
          <Col xs={12} md={6} xxl={3}>
            <div className="grid-box">
              <Card>
                <Card.Body>
                  <Row className="content-overview align-items-end align-left">
                    <Col lg={6} xxl={12}>
                      <h2>$7,641 </h2>
                      <p> Orders </p>
                      <p className='status-percentage mt-22'><span><ArrowUp />25% </span><span> Since last week</span></p>
                    </Col>
                    <Col lg={6} xxl={12}>
                    <row className="eco">
                        <div className="col-lg-12 col-xxl-6 offset-xxl-6">
                      <BarChart width={150} height={40} data={data.order}>
                        <Bar dataKey="Order" fill="#00b300" />
                        <Tooltip />
                      </BarChart>
                      </div>
                      </row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={12} md={6} xxl={3}>
            <div className="grid-box">
              <Card>
                <Card.Body>
                  <Row className="content-overview align-items-end align-left">
                    <Col lg={6} xxl={12}>
                      <h2> $28,947 </h2>
                      <p> Revenue </p>
                      <p className='status-percentage mt-22'><span className="text-danger"><ArrowDown />25% </span><span> Since last week</span></p>
                    </Col>
                    <Col lg={6} xxl={12}>
                      <row className="eco">
                        <div className="col-lg-12 col-xxl-6 offset-xxl-6">
                      <BarChart width={150} height={40} data={data.revenue}>
                        <Bar dataKey="Revenue" fill="#00b300" />
                        <Tooltip />
                      </BarChart>
                      </div>
                      </row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={12} md={6} xxl={3}>
            <div className="grid-box">
              <Card>
                <Card.Body>
                  <Row className="content-overview align-items-end align-left">
                    <Col lg={6} xxl={12}>
                      <h2>$3,241</h2>
                      <p> Avg. order value </p>
                      <p className='status-percentage mt-22'><span><ArrowUp />25% </span><span> Since last week</span></p>
                    </Col>
                    <Col lg={6} xxl={12}>
                    <row className="eco">
                        <div className="col-lg-12 col-xxl-6 offset-xxl-6">
                      <BarChart width={150} height={40} data={data.avgorders}>
                        <Bar dataKey="Avgorders" fill="#00b300" />
                        <Tooltip />
                      </BarChart>
                      </div>
                      </row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={12} md={6} xxl={3}>
            <div className="grid-box">
              <Card>
                <Card.Body>
                  <Row className="content-overview align-items-end align-left">
                    <Col lg={6} xxl={12}>
                      <h2>45.2k </h2>
                      <p> Unique visitors </p>
                      <p className='status-percentage mt-22'><span className='growth-upward'><ArrowUp />25% </span><span> Since last week</span></p>
                    </Col>
                    <Col lg={6} xxl={12}>
                    <row className="eco">
                        <div className="col-lg-12 col-xxl-6 offset-xxl-6">
                      <BarChart width={200} height={40} data={data.visitors}>
                        <Bar dataKey="Visitors" fill="#00b300" />
                        <Tooltip />
                      </BarChart>
                      </div>
                      </row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        <Row className="grid-box-row">
          <Col xs={12} xxl={6}>
            <div className="grid-box">
              <div className="grid-box-heading">
                <h5>Total Revenue</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={showData === 'weekData' ? "active" : undefined} onClick={weekHandler}>Week</button>
                  <button className={showData === 'monthData' ? "active" : undefined} onClick={monthHandler}>Month</button>
                  <button className={showData === 'yearData' ? "active" : undefined} onClick={yearHandler}>Year</button>
                </div>
              </div>
              <div className='graph-box graph-dir-chang'>
                {TotalRevenueData.filter((value) => value.name === showData).map((val, index) => {
                  return (
                    <React.Fragment key={index}>
                      <DoubleLine
                        data={val.data}
                        DataKeyX="Name"
                        line1="Current Period"
                        line2="Previous Period"
                        aspEcom={1.35}
                      />
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </Col>

          <Col xs={12} xxl={6}>
            <div className="grid-box">
              <div className="grid-box-heading rev">
                <h5>Source Of Revenue Generated</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={revenueGeneratedData === 'weekData' ? "active" : undefined} onClick={weekRevenueHandler}>Week</button>
                  <button className={revenueGeneratedData === 'monthData' ? "active" : undefined} onClick={monthRevenueHandler}>Month</button>
                  <button className={revenueGeneratedData === 'yearData' ? "active" : undefined} onClick={yearRevenueHandler}>Year</button>
                </div>
              </div>

              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      <th>Name of Source</th>
                      <th>Visitors</th>
                      <th>Page View</th>
                      <th>Revenue </th>
                      <th>Trend</th>
                    </tr>
                  </thead>
                  {RevenueGenData.map((data) => {
                    if (data.name === revenueGeneratedData) {
                      return data.data.map((data, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{data.name}</td>
                              <td>{data.visitor}</td>
                              <td>{data.pageView}</td>
                              <td>{data.revenue}</td>
                              <td>
                                <LineChart
                                  width={150}
                                  height={40}
                                  data={data.trend}
                                >
                                  <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke={COLORS[index % COLORS.length]}
                                    strokeWidth={3.5}
                                    dot={false}
                                  />
                                </LineChart>
                              </td>
                            </tr>
                          </tbody>
                        );
                      });
                    }
                    return null;
                  })}
                </Table>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="grid-box-row">
          <Col xs={12} md={6} xxl={4}>
            <div className="grid-box">
              <div className="grid-box-heading">
                <h5>Top Selling Products</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={sellingProductData === 'todayData' ? "active" : undefined} onClick={todaySellingProductHandler}>Today</button>
                  <button className={sellingProductData === 'weekData' ? "active" : undefined} onClick={weekSellingProductHandler}>Week</button>
                  <button className={sellingProductData === 'monthData' ? "active" : undefined} onClick={monthSellingProductHandler}>Month</button>
                  <button className={sellingProductData === 'yearData' ? "active" : undefined} onClick={yearSellingProductHandler}>Year</button>
                </div>
              </div>
              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      <th>Name of Source</th>
                      <th>Price</th>
                      <th>Page View</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  {SellingProductData.map((data) => {
                    if (data.name === sellingProductData) {
                      return data.data.map((data, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{data.name}</td>
                              <td>{data.price}</td>
                              <td>{data.sold}</td>
                              <td>{data.revenue}</td>
                            </tr>
                          </tbody>
                        );
                      });
                    }
                    return null;
                  })}
                </Table>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} xxl={4}>
            <div className="grid-box">
              <div className="grid-box-heading">
                <h5>Sales By Location</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={saleLocationData === 'todayData' ? "active" : undefined} onClick={todaySaleLocationHandler}>Today</button>
                  <button className={saleLocationData === 'weekData' ? "active" : undefined} onClick={weekSaleLocationHandler}>Week</button>
                  <button className={saleLocationData === 'monthData' ? "active" : undefined} onClick={monthSaleLocationHandler}>Month</button>
                  <button className={saleLocationData === 'yearData' ? "active" : undefined} onClick={yearSaleLocationHandler}>Year</button>
                </div>
              </div>

              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Order</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  {SaleLocationData.map((data) => {
                    if (data.name === saleLocationData) {
                      return data.data.map((data, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{data.location}</td>
                              <td>{data.order}</td>
                              <td>{data.revenue}</td>
                            </tr>
                          </tbody>
                        );
                      });
                    }
                    return null;
                  })}
                </Table>
              </div>
            </div>
          </Col>

          <Col xs={12} xxl={4} className="mx-auto">
            <div className="grid-box">
              <div className="grid-box-heading">
                <h5>Revenue By Dev...</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={revenueByDeviceData === 'weekData' ? "active" : undefined} onClick={weekRevenueByDeviceHandler}>Week</button>
                  <button className={revenueByDeviceData === 'monthData' ? "active" : undefined} onClick={monthRevenueByDeviceHandler}>Month</button>
                  <button className={revenueByDeviceData === 'yearData' ? "active" : undefined} onClick={yearRevenueByDeviceHandler}>Year</button>
                </div>
              </div>
              <div>
                {RevenueDeviceData.map((val, index) => {
                  if (val.name === revenueByDeviceData) {
                    return (
                      <React.Fragment key={index}>
                        <PieCharts data={val.data} DataKey="value" />
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="table-responsive reduce-spacing">
                <Table>
                  {RevenueDeviceData.map((val) => {
                    if (val.name === revenueByDeviceData) {
                      return val.data.map((entry, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{entry.name}</td>
                              <td>{entry.revenue}</td>
                              <td>{entry.ratio}</td>
                            </tr>
                          </tbody>
                        );
                      });
                    }
                    return null;
                  })}
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ecommerce;
