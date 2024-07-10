import React, { useState } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { ArrowDown, ArrowUp, People, CashStack, BarChartLine } from 'react-bootstrap-icons';
import TotalRevenueData from '../Data/Chart/TotalRevenueData.json';
import Data from '../Data/Chart/Bar.json';
import { SellingProductData } from '../Data/Chart/SellingProductData.js';
import "react-calendar/dist/Calendar.css";
import './Chartpage.css';
import Topbar from "../../Hook/Topbar";
import { DoubleLine } from "../../Hook/Recharts/LineCharts";
import MetaTags from "../HeadTag/MetaTags";
import { SingleBar } from "../../Hook/Recharts/BarCharts";

const SalePerformance = () => {
  const [showData, setShowData] = useState("weekData");
  const [sellingProductData, setSellingProductData] = useState("todayData");
  const heading = "Sales Performace Dashboard";

  const weekHandler = () => {
    setShowData("weekData")
  }

  const monthHandler = () => {
    setShowData("monthData")
  }
  const yearHandler = () => {
    setShowData("yearData")
  }

  const todaySellingProductHandler = () => {
    setSellingProductData("todayData")
  }
  const weekSellingProductHandler = () => {
    setSellingProductData("weekData")
  }

  const monthSellingProductHandler = () => {
    setSellingProductData("monthData")
  }

  const yearSellingProductHandler = () => {
    setSellingProductData("yearData")
  }

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container>
        <Row className="grid-box-row">
          <Col xs={12} md={4}>
            <Row className="sale-performance-main">
              <Col xs={12} className="grid-box">
                <Card>
                  <Card.Body>
                    <div className="contentoverview-icon">
                      <People />
                    </div>
                    <div className='content-overview'>
                      <h2> $7,461</h2>
                      <p>New Customer</p>
                      <p className='status-percentage inline-flex'><span><ArrowUp /> 25%</span> Since last Week</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} className="grid-box">
                <Card>
                  <Card.Body>
                    <div className="contentoverview-icon contentoverview-icon2">
                      <BarChartLine />
                    </div>
                    <div className='content-overview'>
                      <h2>$28,947</h2>
                      <p>Sales Revenue</p>
                      <p className='status-percentage inline-flex'><span className="text-danger"><ArrowDown /> 25%</span> Since last Week</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} className="grid-box">
                <Card>
                  <Card.Body>
                    <div className="contentoverview-icon contentoverview-icon3">
                      <CashStack />
                    </div>
                    <div className='content-overview'>
                      <h2> $3,241</h2>
                      <p>Profit</p>
                      <p className='status-percentage inline-flex'><span><ArrowUp /> 25%</span> Since last Week</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={8}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Total Revenue</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={showData === "weekData" ? "active" : undefined} onClick={weekHandler}>Week</button>
                  <button className={showData === "monthData" ? "active" : undefined} onClick={monthHandler}>Month</button>
                  <button className={showData === "yearData" ? "active" : undefined} onClick={yearHandler}>Year</button>
                </div>
              </div>

              {TotalRevenueData.map((data, index) => {
                if (data.name === showData) {
                  return (
                    <React.Fragment key={index}>
                      <DoubleLine
                        data={data.data}
                        DataKeyX="Name"
                        line1="Current Period"
                        line2="Previous Period"
                        asp992={1.6}
                        asp1400={2.1}
                      />
                    </React.Fragment>
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Monthly Sales Target</h5>
              </div>
              <div class="target-progressbar-wrap">
                <svg xm-lns="http://www.w3.org/2000/svg" width="225.324" height="117.766" viewBox="0 0 225.324 117.766" class="tKPwJ"><g id="Group_1657" data-name="Group 1657" transform="translate(-536.893 -818.88)"><text id="_70_" data-name="70%" transform="translate(618 907)" font-size="30" font-family="Inter-Bold, Inter" font-weight="700"><tspan x="0" y="0">80% </tspan></text><text id="Progress" transform="translate(619 931)" fill="#868eae" font-size="15" font-family="Inter-Regular, Inter"><tspan x="0" y="0"> Progress </tspan></text><path id="Path_1041" data-name="Path 1041" d="M253.5,399.119c.718-56.767,49.862-102.114,106.9-100.622,54.969,1.437,100.569,45.944,101.22,100.622" transform="translate(292 528.92)" fill="none" stroke="#e8faf4" stroke-linecap="round" stroke-linejoin="round" stroke-width="17"></path><path id="Path_1042" data-name="Path 1042" d="M253.5,399.119c.718-56.767,49.862-102.114,106.9-100.622,54.969,1.437,100.569,45.944,101.22,100.622" transform="translate(292 528.92)" fill="none" stroke="#20c997" stroke-linecap="round" stroke-linejoin="round" stroke-width="17"></path></g></svg>
              </div>

              <div className="d-flex justify-content-between">
                <div className="progressbar-content">
                  <h2>$5,870 </h2>
                  <span>Revenue</span>
                </div>
                <div className="progressbar-content">
                  <h2 className="black-color">$7,870</h2>
                  <span>Target</span>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={8}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Monthly Sales Growth</h5>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="progressbar-content">
                  <h2 className="black-color">70%</h2>
                  <span>Progress</span>
                </div>
                <div className="progressbar-content">
                  <h2 className="black-color">20%</h2>
                  <span>Target</span>
                </div>
              </div>

              <SingleBar
                data={Data.orderFullYear}
                DataKeyX="Name"
                Bar1="Order"
                Fill1="red"
              />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Top Selling Products</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={sellingProductData === "todayData" ? "active" : undefined} onClick={todaySellingProductHandler}>Today</button>
                  <button className={sellingProductData === "weekData" ? "active" : undefined} onClick={weekSellingProductHandler}>Week</button>
                  <button className={sellingProductData === "monthData" ? "active" : undefined} onClick={monthSellingProductHandler}>Month</button>
                  <button className={sellingProductData === "yearData" ? "active" : undefined} onClick={yearSellingProductHandler}>Year</button>
                </div>
              </div>

              <div className="table-responsive">
                <Table >
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Sold</th>
                      <th>evenue  </th>
                    </tr>
                  </thead>
                  {SellingProductData.map((data) => {
                    if (data.name === sellingProductData) {
                      return (
                        data.data.map((data, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td><img src={data.img} alt="data" /></td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.sold}</td>
                                <td>{data.revenue}</td>
                              </tr>
                            </tbody>
                          )
                        })
                      )
                    }
                    return null
                  })}
                </Table>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="grid-box">
              <div className='grid-box-heading'>
                <h5>Recent Orders</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={sellingProductData === "todayData" ? "active" : undefined} onClick={todaySellingProductHandler}>Today</button>
                  <button className={sellingProductData === "weekData" ? "active" : undefined} onClick={weekSellingProductHandler}>Week</button>
                  <button className={sellingProductData === "monthData" ? "active" : undefined} onClick={monthSellingProductHandler}>Month</button>
                  <button className={sellingProductData === "yearData" ? "active" : undefined} onClick={yearSellingProductHandler}>Year</button>
                </div>
              </div>

              <div className="table-responsive">
                <Table >
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Sold</th>
                      <th>Revenue  </th>
                    </tr>
                  </thead>
                  {SellingProductData.map((data) => {
                    if (data.name === sellingProductData) {
                      return (
                        data.data.map((data, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.sold}</td>
                                <td>{data.revenue}</td>
                              </tr>
                            </tbody>
                          )
                        })
                      )
                    }
                    return null
                  })}
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default SalePerformance;