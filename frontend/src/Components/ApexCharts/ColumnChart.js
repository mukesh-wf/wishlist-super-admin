import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Piechart from '../Data/Chart/Piechart.json';
import Topbar from '../../Hook/Topbar';
import ApexCharts from '../../Hook/ChartsWrapper/ApexCharts';
import MetaTags from '../HeadTag/MetaTags';

const ColumnChart = () => {
  const [active, setActive] = useState(true);
  const heading = "Column Charts";

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
                <h5>Basic Column Chart</h5>
               </div>
              {Piechart.map((value, index) => {
                if (value.name === "column") {
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
                <h5>Column with Data Labels</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "columnWithLabel") {
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
                <h5>Column with Negative Values</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "columnWithNegative") {
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
                <h5>Distributed Columns Chart</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "columnWithDistributed") {
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
                <h5>Stacked Column Chart</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "stackedColumn") {
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
                <h5>Rotated Column Chart</h5>
              </div>
              {Piechart.map((value, index) => {
                if (value.name === "rotatedColumn") {
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

export default ColumnChart;