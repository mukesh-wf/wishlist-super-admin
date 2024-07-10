import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container, ProgressBar } from 'react-bootstrap';
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import Data from '../Data/Chart/ProfitChart.json';
import Cashflow from '../Data/Chart/CashFlow.json';
import IncomeExpenses from '../Data/Chart/IncomeExpenses.json';
import AccountType from '../Data/Chart/AccountType.json';
import Topbar from '../../Hook/Topbar';
import { SingleLine, WithoutXaxis } from '../../Hook/Recharts/LineCharts';
import { DoubleBar, QuadBar } from '../../Hook/Recharts/BarCharts';
import MetaTags from '../HeadTag/MetaTags';

const FinanceDashboard = () => {
    const [data, setData] = useState("weekData");
    const [incomeButton, setIncomeButton] = useState("weekData");
    const [active, setActive] = useState(true);
    const heading = "Finance Dashboard";

    useEffect(() => {
        setActive(false);
        setData("weekData")
    }, [active]);

    const weekHandler = () => {
        setData("weekData")
    }

    const monthHandler = () => {
        setData("monthData")
    }

    const yearHandler = () => {
        setData("yearData")
    }

    const weekIncomeHandler = () => {
        setIncomeButton("weekData")
    }

    const monthIncomeHandler = () => {
        setIncomeButton("monthData")
    }

    const yearIncomeHandler = () => {
        setIncomeButton("yearData")
    }

    return (
        <>
            <MetaTags title={heading} />
            <Topbar heading={heading} />

            <Container className='main-container finance-page'>
                <Row className='grid-box-row mb-3'>
                    <Col xs={12} xxl={6}>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className='grid-box'>
                                    <Card>
                                        <Card.Body>
                                            <div className='content-overview align-left'>
                                                <h5>Net Profit</h5>
                                                <h2>$25.3k</h2>
                                                <p className='status-percentage focard-status inline-flex'><span><ArrowUp />25% </span><span>Since last month</span></p>
                                            </div>
                                            <div className='graph-box'>
                                                {
                                                    Data.map((item, index) => {
                                                        if (item.name === "netprofit") {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <WithoutXaxis
                                                                        Width={300}
                                                                        Height={80}
                                                                        data={item.Data}
                                                                        line="Net"
                                                                        Stroke="#8884d8"
                                                                        strokeWidth={4}
                                                                        Dot={false}
                                                                    />
                                                                </React.Fragment>
                                                            )
                                                        }
                                                        return null
                                                    })
                                                }
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                            <Col xs={12} md={6}>
                                <div className='grid-box'>
                                    <Card>
                                        <Card.Body>
                                            <div className='content-overview align-left'>
                                                <h5>Gross Profit</h5>
                                                <h2>$25.3k</h2>
                                                <p className='status-percentage inline-flex'><span><ArrowDown /></span>25% <span>Since last month</span></p>
                                            </div>
                                            <div className='graph-box'>
                                                {
                                                    Data.map((item, index) => {
                                                        if (item.name === "grossprofit") {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <WithoutXaxis
                                                                        Width={300}
                                                                        Height={80}
                                                                        data={item.Data}
                                                                        line="Gross"
                                                                        Stroke="green"
                                                                        strokeWidth={4}
                                                                        Dot={false}
                                                                    />
                                                                </React.Fragment>
                                                            )
                                                        }
                                                        return null
                                                    })
                                                }
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={6}>
                                <div className='grid-box'>
                                    <Card>
                                        <Card.Body>
                                            <div className='content-overview align-left'>
                                                <h5>Quick Ratio</h5>
                                                <h2 className='heading-flex green-color'>1.8 <span>80%</span></h2>
                                                <ProgressBar className='green-color' now={80} style={{ height: "8px" }} />
                                                <p className='color-change'>1 or higher <span>quick ratio target</span></p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                            <Col xs={12} md={6}>
                                <div className='grid-box'>
                                    <Card>
                                        <Card.Body>
                                            <div className='content-overview align-left'>
                                                <h5>Current Ratio</h5>
                                                <h2 className='heading-flex yellow-color'>2.4 <span> 72%</span></h2>
                                                <ProgressBar className='yellow-color' now={72} variant="warning" style={{ height: "8px" }} />
                                                <p className='color-change'>3 or higher <span>current ratio target</span></p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} xxl={6}>
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Cash Flow <span> Nov 23, 2019 - Nov 29, 2019</span></h5>
                                <div className="boxsize boxsize-transparent">
                                    <button className={data === 'weekData' ? "active" : undefined} onClick={weekHandler}>Week</button>
                                    <button className={data === 'monthData' ? "active" : undefined} onClick={monthHandler}>Month</button>
                                    <button className={data === 'yearData' ? "active" : undefined} onClick={yearHandler}>Year</button>
                                </div>
                            </div>

                            {Cashflow.map((value, index) => {
                                if (value.name === data) {
                                    return (
                                        <React.Fragment key={index}>
                                            <Row className='flx'>
                                                <Col xs={3}>
                                                    <Card>
                                                        <Card.Body>
                                                            <div className='content-overview align-left'>
                                                                <p>Current Balance</p>
                                                                <h2 className='coll'>{value.CurrentBalance}</h2>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col xs={3}>
                                                    <Card>
                                                        <Card.Body>
                                                            <div className='content-overview align-left'>
                                                                <p>Cash In</p>
                                                                <h2>{value.CashIn}</h2>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col xs={3}>
                                                    <Card>
                                                        <Card.Body>
                                                            <div className='content-overview align-left'>
                                                                <p>Cash Out</p>
                                                                <h2>{value.CashOut} </h2>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>

                                            <div className='graph-box graph-dir-chang graph-dir-reverse'>
                                                <DoubleBar
                                                    data={value.data}
                                                    DataKeyX="Name"
                                                    Bar1="Cash in"
                                                    Bar2="Cash out"
                                                    Fill1="#ff0000"
                                                    Fill2="#82ca9d"
                                                    socialAsp1400={1.7}
                                                />
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>
                </Row>

                <Row className='grid-box-row'>
                    <Col lg={12}>
                        <div className='grid-box'>
                            <div className='grid-box-heading gt'>
                                <h5>Income And Expenses <span> Nov 23, 2019 - Nov 29, 2019</span></h5>
                                <div className="boxsize boxsize-transparent">
                                    <button className={incomeButton === "weekData" ? "active" : undefined} onClick={weekIncomeHandler}>Week</button>
                                    <button className={incomeButton === "monthData" ? "active" : undefined} onClick={monthIncomeHandler}>Month</button>
                                    <button className={incomeButton === "yearData" ? "active" : undefined} onClick={yearIncomeHandler}>Year</button>
                                </div>
                            </div>
                            {IncomeExpenses.map((value, index) => {
                                if (value.name === incomeButton) {
                                    return (
                                        <React.Fragment key={index}>
                                            <Row>
                                                <Col xs={12} xxl={3}>
                                                    <Row className='income'>
                                                        <Col xs={3} xxl={12}>
                                                            <Card>
                                                                <Card.Body>
                                                                    <div className='content-overview mb-25'>
                                                                        <p>Total income</p>
                                                                        <h2>{value.TotalIncome}</h2>
                                                                        <p className='status-percentage inline-flex'><span><ArrowUp /> 37%</span> Since last month</p>
                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col xs={3} xxl={12}>
                                                            <Card>
                                                                <Card.Body>
                                                                    <div className='content-overview mb-25'>
                                                                        <p>Total expenses</p>
                                                                        <h2>{value.TotalExpense}</h2>
                                                                        <p className='status-percentage focard-status inline-flex'><span><ArrowDown /> 25%</span> Since last month</p>
                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col xs={3} xxl={12}>
                                                            <Card>
                                                                <Card.Body>
                                                                    <div className='content-overview mb-25'>
                                                                        <p>Cost of goods sold</p>
                                                                        <h2>{value.CostOfGoods}</h2>
                                                                        <p className='status-percentage inline-flex'><span><ArrowUp /> 25% </span>Since last month</p>
                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col xs={3} xxl={12}>
                                                            <Card>
                                                                <Card.Body>
                                                                    <div className='content-overview mb-25'>
                                                                        <p>Net profit</p>
                                                                        <h2>{value.NetProfits}</h2>
                                                                        <p className='status-percentage inline-flex'><span><ArrowUp /> 25% </span>Since last month</p>
                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </Col>

                                                <Col xs={12} xxl={9}>

                                                    <div className='graph-box graph-dir-chang graph-dir-reverse'>
                                                        <div className='tol'>
                                                            <QuadBar
                                                                data={value.data}
                                                                DataKeyX="Name"
                                                                Bar1="Total Income"
                                                                Bar2="Cost of goods sold"
                                                                Bar3="Total expenses"
                                                                Bar4="Net profit"
                                                                Fill1="#ff0000"
                                                                Fill2="#82ca9d"
                                                                Fill3="#FFA500"
                                                                Fill4="#0000FF"
                                                            />
                                                        </div></div>
                                                </Col>
                                            </Row>
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>
                </Row>

                <Row className='grid-box-row'>
                    <Col xs={12} md={6}>
                        <div className='grid-box'>
                            <h5 className='mb-3 acc'>Account Receivable</h5>
                            {AccountType.map((value, index) => {
                                if (value.type === "Account Receivable") {
                                    return (
                                        <React.Fragment key={index}>
                                            <SingleLine
                                                data={value.data}
                                                DataKeyY="day"
                                                line="amount"
                                                Stroke="#0275d8"
                                                Fill="#0275d8"
                                            />
                                        </React.Fragment>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className='grid-box'>
                            <h5 className='mb-3 acc'>Account Payable</h5>
                            {AccountType.map((value, index) => {
                                if (value.type === "Account Payable") {
                                    return (
                                        <React.Fragment key={index}>
                                            <SingleLine
                                                data={value.data}
                                                DataKeyY="day"
                                                line="amount"
                                                Stroke="#DC3545"
                                                Fill="#DC3545"
                                            />
                                        </React.Fragment>
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

export default FinanceDashboard;