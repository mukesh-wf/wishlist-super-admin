import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ApexCharts from '../../Hook/ChartsWrapper/ApexCharts';
import Piechart2 from '../Data/Chart/PieChart2.json';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const RadialBarChart = () => {
  const [active, setActive] = useState(true);
  const heading = "Radialbar Charts";

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
                <h5>Basic RadialBar Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "basicRadial") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radialBar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Multiple RadialBar Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "multipleRadial") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radialBar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Custom Angle Circle Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "customRadial") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radialBar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Gradient Circle Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "gradientRadial") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radialBar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Stroked Circle Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "strockedRadial") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radialBar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Semi Circle Gauge Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "semiRadial") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radialBar" />
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

export default RadialBarChart;


