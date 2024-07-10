import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Piechart3 from '../Data/Chart/PieChart3.json';
import Topbar from '../../Hook/Topbar';
import ApexCharts from '../../Hook/ChartsWrapper/ApexCharts';
import MetaTags from '../HeadTag/MetaTags';

const AreaChart = () => {
  const [active, setActive] = useState(true);
  const heading = "Area Charts";

  useEffect(() => {
    setActive(false);
  }, [active]);

  const series = [{
    name: 'Total Views',
    data: generateDayWiseTimeSeries(0, 18)
  }, {
    name: 'Unique Views',
    data: generateDayWiseTimeSeries(1, 18)
  }]

  function generateDayWiseTimeSeries(s, count) {
    var values = [[
      4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5
    ], [
      2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2
    ]];
    var i = 0;
    var series = [];
    var x = new Date("11 apr 2023").getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='main-container columnchart-page'>
        <Row className='grid-box-row'>
          <Col xs={12 }lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Basic Area Chart</h5>
              </div>
              {Piechart3.filter((value) => value.name === "basicArea").map((val, index) => {
                return (
                  <ApexCharts key={index} option={val.options} series={val.series} type="area" />
                )
              })}
            </div>
          </Col>

          <Col xs={12 }lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Spline Area Chart</h5>
              </div>
              {Piechart3.filter((value) => value.name === "sparea").map((val, index) => {
                return (
                  <ApexCharts key={index} option={val.options} series={val.series} type="area" />
                )
              })}
            </div>
          </Col>

          <Col xs={12 }lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Area Chart with Negative Values</h5>
              </div>
              {Piechart3.filter((value) => value.name === "negativeArea").map((val, index) => {
                return (
                  <ApexCharts key={index} option={val.options} series={val.series} type="area" />
                )
              })}
            </div>
          </Col>

          <Col xs={12 }lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Stacked Area Chart</h5>
              </div>
              {Piechart3.filter((value) => value.name === "stackedArea").map((val, index) => {
                return (
                  <ApexCharts key={index} option={val.options} series={series} type="area" />
                )
              })}
            </div>
          </Col>

          <Col xs={12 }lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Area Chart with Missing Values</h5>
              </div>
              {Piechart3.filter((value) => value.name === "missingArea").map((val, index) => {
                return (
                  <ApexCharts key={index} option={val.options} series={val.series} type="area" />
                )
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AreaChart;