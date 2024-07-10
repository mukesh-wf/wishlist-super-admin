import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ApexCharts from '../../Hook/ChartsWrapper/ApexCharts';
import Piechart2 from '../Data/Chart/PieChart2.json';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const ColumnChart = () => {
  const [active, setActive] = useState(true);
  const heading = "Line Charts";

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
                <h5>Basic Line Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "basicLine") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="line" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Line Chart with Data Labels</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "lineWithDatalabel") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="line" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Gradient Line Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "gradientLine") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="line" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Dashed Line Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "dashedLine") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="line" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Step Line Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "stepLine") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="line" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Missing Line Chart</h5>
              </div>
              {Piechart2.map((value, index) => {
                if (value.name === "missingLine") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="line" />
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

export default ColumnChart