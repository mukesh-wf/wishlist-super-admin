import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { PieChart, Cell, Pie, Tooltip } from 'recharts';
import Cashflow from '../Data/Chart/CashFlow.json';
import piechart from '../Data/Chart/Piechart.json';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';
import { DoubleBar, HorizentalBar, StackedBar } from '../../Hook/Recharts/BarCharts';
import { ChartjsDoubleLine } from '../../Hook/Recharts/LineCharts';
import AreaCharts from '../../Hook/Recharts/AreaCharts';

const Chartjs = () => {
    const [active, setActive] = useState(true);
    const heading = "Charts";
    const COLORS = ["#99ccff", "#ff0000", "#0088FE", "#00ff00", "#800080"];


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
                                <h5>Bar Chart</h5>
                            </div>
                            {Cashflow.map((value, index) => {
                                if (value.name === "yearData") {
                                    return (
                                        <React.Fragment key={index}>
                                            <DoubleBar
                                                data={value.data}
                                                DataKeyX="Name"
                                                Bar1="Cash in"
                                                Bar2="Cash out"
                                                Fill1="#ff0000"
                                                Fill2="#82ca9d"
                                                leag={true}
                                                asp576={1.8}
                                                asp768={2}
                                                asp992={1.3}
                                                asp1600={1.8}
                                                Ang={-40}
                                                Ang1200
                                                X={-10}
                                                Y={7}
                                                Mint={-200}
                                            />
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Horizontal Chart</h5>
                            </div>
                            {Cashflow.map((value, index) => {
                                if (value.name === "yearData") {
                                    return (
                                        <React.Fragment key={index}>
                                            <HorizentalBar
                                                data={value.data}
                                                DataKey1="Cash in"
                                                DataKey2="Cash out"
                                                DataKeyY="Name"
                                            />
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Stacked Chart</h5>
                            </div>
                            {Cashflow.map((value, index) => {
                                if (value.name === "yearData") {
                                    return (
                                        <React.Fragment key={index}>
                                            <StackedBar
                                                data={value.data}
                                                DataKeyX="Name"
                                                Bar1="Cash in"
                                                Bar2="Cash out"
                                                Fill1="#ff0000"
                                                Fill2="#82ca9d"
                                                leag={true}
                                                StackId={"a"}
                                                asp576={1.8}
                                                asp768={2}
                                                asp992={1.3}
                                                asp1600={1.8}
                                                Ang={-40}
                                                Ang1200
                                                X={-10}
                                                Y={7}
                                                Mint={-200}
                                            />
                                        </React.Fragment>
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
                            {Cashflow.map((value, index) => {
                                if (value.name === "yearData") {
                                    return (
                                        <React.Fragment key={index}>
                                            <ChartjsDoubleLine
                                                data={value.data}
                                                DataKeyX="Name"
                                                line1="Cash in"
                                                line2="Cash out"
                                                Dot={true}
                                                asp576={1.9}
                                                asp992={1.2}
                                                asp1200={1.5}
                                                asp1400={1.8}
                                                asp1600={1.8}
                                                Ang={-40}
                                                Ang1200
                                                X={-10}
                                                Y={7}
                                                Mint={-200}
                                            />
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Area Chart</h5>
                             </div>
                            {Cashflow.map((value, index) => {
                                if (value.name === "yearData") {
                                    return (
                                        <React.Fragment key={index}>
                                            <AreaCharts
                                                Data={value.data}
                                                Datakey1="Cash in"
                                                Datakey2="Cash out"
                                            />
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Transparent Chart</h5>
                            </div>
                            {Cashflow.map((value, index) => {
                                if (value.name === "yearData") {
                                    return (
                                        <React.Fragment key={index}>
                                            <DoubleBar
                                                data={value.data}
                                                DataKeyX="Name"
                                                Bar1="Cash in"
                                                Bar2="Cash out"
                                                Fill1="#ff0000"
                                                Fill2="#82ca9d"
                                                leag={true}
                                                asp576={1.8}
                                                asp768={2}
                                                asp992={1.3}
                                                asp1600={1.8}
                                                Ang={-40}
                                                Ang1200
                                                X={-10}
                                                Y={7}
                                                Mint={-200}
                                            />
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className='grid-box donut-chart'>
                            <div className='grid-box-heading'>
                                <h5>Donut Chart</h5>
                            </div>
                            {piechart.map((value, index) => {
                                if (value.name === "yearData") {
                                    return (
                                        <React.Fragment key={index}>
                                            <PieChart width={500} height={300}>
                                                <Pie
                                                    data={value.Data}
                                                    cx={"50%"}
                                                    cy={"50%"}
                                                    innerRadius={80}
                                                    outerRadius={120}
                                                    fill="#8884d8"
                                                    paddingAngle={1}
                                                    dataKey="Net"
                                                >
                                                    {value.Data.map((entry, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </Pie>
                                                <Tooltip cursor={false} />
                                            </PieChart>
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className='grid-box donut-chart'>
                            <div className='grid-box-heading'>
                                <h5>Pie Chart</h5>
                            </div>
                            {piechart.map((value, index) => {
                                if (value.name === "yearData") {
                                    return (
                                        <React.Fragment key={index}>
                                            <PieChart width={500} height={300}>
                                                <Pie
                                                    data={value.Data}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    outerRadius={120}
                                                    fill="#8884d8"
                                                    dataKey="Net"
                                                >
                                                    {value.Data.map((entry, index) => (
                                                        <React.Fragment key={index}>
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        </React.Fragment>
                                                    ))}
                                                </Pie>
                                                <Tooltip cursor={false} />
                                            </PieChart>
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Chartjs;


