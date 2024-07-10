import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ApexCharts from '../../Hook/ChartsWrapper/ApexCharts';
import Piechart3 from '../Data/Chart/PieChart3.json';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const RadarChart = () => {
  const [active, setActive] = useState(true);
  const heading = "Radar Charts";

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
                <h5>Basic Radar Chart</h5>
              </div>
              {Piechart3.map((value, index) => {
                if (value.name === "radar") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Radar Multiple Series Chart</h5>
              </div>
              {Piechart3.map((value, index) => {
                if (value.name === "radarMulti") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Radar With Polygon Fill Chart</h5>
              </div>
              {Piechart3.map((value, index) => {
                if (value.name === "radarPolygon") {
                  return (
                    <ApexCharts key={index} option={value.options} series={value.series} type="radar" />
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

export default RadarChart;