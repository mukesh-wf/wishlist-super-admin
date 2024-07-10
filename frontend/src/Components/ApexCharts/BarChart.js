import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Piechart2 from '../Data/Chart/PieChart2.json';
import Topbar from '../../Hook/Topbar';
import ApexCharts from '../../Hook/ChartsWrapper/ApexCharts';
import MetaTags from '../HeadTag/MetaTags';

const BarChart = () => {
  const [active, setActive] = useState(true);
  const heading = "Bar Charts";

  useEffect(() => {
    setActive(false);
  }, [active]);

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='main-container columnchart-page'>
        <Row className='grid-box-row'>
          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Basic Bar Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "basicBar") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="bar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Reverse Bar Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "reverseLine") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="bar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Grouped Bar Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "groupedBar") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="bar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Stacked Bar Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "stackedBar") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="bar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Bar Chart with Negative Values</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "negativeBar") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="bar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Pattern Bar Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "patternBar") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="bar" />
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

export default BarChart;