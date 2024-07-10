import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Piechart from '../Data/Chart/Piechart.json';
import Topbar from '../../Hook/Topbar';
import ApexCharts from '../../Hook/ChartsWrapper/ApexCharts';
import MetaTags from '../HeadTag/MetaTags';

const Chartjs = () => {
  const [active, setActive] = useState(true);
  const heading = "Pie Charts";

  useEffect(() => {
    setActive(false);
  }, [active]);


  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='main-container'>
        <Row className='grid-box-row'>
          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Pie Chart</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "pieCharts") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="pie" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Donut Chart</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "donut") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="donut" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Gradient Donut Chart</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "gradientDonut") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="donut" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Gradient Donut Chart</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "semiDonut") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="donut" />
                  )
                }
                return null
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Chartjs;


