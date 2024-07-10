import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import GoggleCharts from '../../Hook/ChartsWrapper/GoogleCharts';
import piechart from '../Data/Chart/Piechart.json';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const GoogleCharts = () => {
  const [active, setActive] = useState(true);
  const heading = "Google Charts";

  useEffect(() => {
    setActive(false);
  }, [active]);

  const dataValue = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };


  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='main-container'>
        <Row className='grid-box-row'>
          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Custom Colors Bar Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "basicBarChart") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="BarChart" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Material Design</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "materialDesign") {
                  return (
                    <GoggleCharts key={index} data={value.data} type="Bar" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Bubble Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "bubbleChart") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="BubbleChart" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Basic Bar Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "basicBarChart2") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="BarChart" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Stacked bar chart with multiple series</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "stackedBarChart") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="BarChart" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Line Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "lineChart") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="LineChart" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Combo Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "comboChart") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="ComboChart" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Multiple Line Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "multipleLineChart") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="LineChart" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Basic Pie Chart</h5>
              </div>
              <GoggleCharts data={dataValue} option={options} type="PieChart" />
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>3D Pie Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "pieChart3D") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="PieChart" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Material Design Scatter Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "scatterChart") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="Scatter" />
                  )
                }
                return null
              })}
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className='grid-box'>
              <div className='grid-box-heading'>
                <h5>Stacked Area Chart</h5>
              </div>
              {piechart.map((value, index) => {
                if (value.name === "areaChart") {
                  return (
                    <GoggleCharts key={index} data={value.data} option={value.options} type="AreaChart" />
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

export default GoogleCharts;