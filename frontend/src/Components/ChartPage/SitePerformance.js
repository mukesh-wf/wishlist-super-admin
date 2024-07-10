import React, { useEffect, useState } from "react";
import { Container, Row, Col, ProgressBar, Table } from "react-bootstrap";
import { Activity, ArrowDown, ArrowUp } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "react-calendar/dist/Calendar.css";
import "../../Css/Theme.css";
import TotalRevenue from "../Data/Chart/TotalRevenueData.json";
import Traffic from "../Data/Chart/Traffic.json";
import LandingPages from "../Data/Chart/LandingPages.json";
import Data from "../Data/Chart/PieChartCustom.json";
import Session from "../Data/Chart/Session.json";
import Topbar from "../../Hook/Topbar";
import { DoubleLine } from "../../Hook/Recharts/LineCharts";
import PieCharts from "../../Hook/Recharts/PieCharts";
import MetaTags from "../HeadTag/MetaTags";

const SitePerformance = () => {
  const [progressbarButton, setProgressbarButton] = useState("weekData");
  const [progressTableButton, setProgressTableButton] = useState("weekData");
  const [peiTable, setPieTable] = useState("weekData");
  const [progressTabledButton, setProgressTabledButton] = useState("weekData");
  const [mapTableButton, setMapTableButton] = useState("weekData");
  const [active, setActive] = useState(true);
  const heading = "Site Performance Dashboard";

  useEffect(() => {
    setActive(false);
    setProgressbarButton("weekData");
  }, [active]);

  const weekHandler = () => {
    setProgressbarButton("weekData");
  };

  const monthHandler = () => {
    setProgressbarButton("monthData");
  };

  const yearHandler = () => {
    setProgressbarButton("yearData");
  };

  const weekTable = () => {
    setProgressTableButton("weekData");
  };

  const monthTable = () => {
    setProgressTableButton("monthData");
  };

  const yearTable = () => {
    setProgressTableButton("yearData");
  };

  const weekTabledPie = () => {
    setPieTable("weekData");
  };

  const monthTabledPie = () => {
    setPieTable("monthData");
  };

  const yearTabledPie = () => {
    setPieTable("yearData");
  };

  const weekTabled = () => {
    setProgressTabledButton("weekData");
  };

  const monthTabled = () => {
    setProgressTabledButton("monthData");
  };

  const yearTabled = () => {
    setProgressTabledButton("yearData");
  };

  const weekTableMap = () => {
    setMapTableButton("weekData");
  };

  const monthTableMap = () => {
    setMapTableButton("monthData");
  };

  const yearTableMap = () => {
    setMapTableButton("yearData");
  };

  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container>
        <Row className="margin0 sitePerformance">
          <Col lg={4}>
            <CardGroup className="flex-column grid-box">
              <Card className="site-daily-heading">
                <h5>Daily overview</h5>
              </Card>
              <Card className="grid-box mb-4">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="site-overview color-neon-blue">
                      <h2>5,461</h2>
                      <p>Users Today</p>
                    </div>
                    <div className="site-overview">
                      <h2>8,085</h2>
                      <p>Expected Users</p>
                    </div>
                  </div>
                  <ProgressBar />
                  <Card.Text>
                    <div className="status-percentage d-flex align-items-center justify-content-between">
                      <p className="d-flex"><span><ArrowUp /> 25%</span> Since yesterday</p> 70%
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="grid-box">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="site-overview color-dodger-blue">
                      <h2>140</h2>
                      <p>Goals Today</p>
                    </div>
                    <div className="site-overview">
                      <h2>120</h2>
                      <p>Expected Goals</p>
                    </div>
                  </div>
                  <ProgressBar className="color-dodger-blue" />
                  <Card.Text>
                    <div className="status-percentage focard-status d-flex align-items-center justify-content-between">
                     <p className="d-flex"><span><ArrowDown /> 25%</span> Since yesterday</p> 70%
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col lg={8}>
            <div className="grid-box website-performance">
              <div className="grid-box-heading">
                <h5>Website Performance</h5>
                <div className="boxsize boxsize-transparent dp" >
                  <button className={progressbarButton === "weekData" ? "active" : undefined} onClick={weekHandler}>Week</button>
                  <button className={progressbarButton === "monthData" ? "active" : undefined} onClick={monthHandler}>Month</button>
                  <button className={progressbarButton === "yearData" ? "active" : undefined} onClick={yearHandler}>Year</button>
                </div>
              </div>
              <CardGroup>
                <Card>
                  <Card.Body>
                    {TotalRevenue.map((data, index) => {
                      if (data.name === progressbarButton) {
                        return (
                          <React.Fragment key={index}>
                            <Row>
                              <Col md={3}>
                                <div className="site-overview active" role="button">
                                    <p>Users</p>
                                    <div className="status-percentage d-flex align-items-center justify-content-between">
                                      <h2>{data.Users}</h2>
                                      <span><ArrowUp /> 25%</span>
                                    </div>
                                </div>
                              </Col>
                              <Col md={3}>
                                <div className="site-overview" role="button">
                                  <p>Sessions</p>
                                  <div className="status-percentage d-flex align-items-center justify-content-between">
                                    <h2>{data.Sessions}</h2>
                                    <span><ArrowUp /> 47%</span>
                                    </div>
                                  </div>
                              </Col>
                              <Col md={3}>
                                <div className="site-overview" role="button">
                                  <p>Bounce Rate</p>
                                  <div className="status-percentage focard-status d-flex align-items-center justify-content-between">
                                    <h2>{data.BounceRate}</h2>
                                    <span><ArrowDown /> 28%</span>
                                    </div>
                                  </div>
                              </Col>
                              <Col md={3}>
                                <div className="site-overview" role="button">
                                  <p>Session Duration</p>
                                    <div className="status-percentage d-flex align-items-center justify-content-between">
                                      <h2>{data.SessionDuration}</h2>
                                      <span><Activity /> 13%</span>
                                    </div>
                                  </div>
                              </Col>
                              <div>
                                <DoubleLine
                                  data={data.data}
                                  DataKeyX="Name"
                                  line1="Current Period"
                                  line2="Previous Period"
                                  Strock1="#5f63f2"
                                  Strock2="#5f63f2"
                                  Dot={false}
                                  siteAsp992={1}
                                  siteAsp1200={0}
                                  siteAsp1400={2.83}
                                />
                              </div>
                            </Row>
                          </React.Fragment>
                        );
                      }
                      return null;
                    })}
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Col>
        </Row>

        <Row className="grid-box-row">
          <Col xs={12} xxl={8}>
            <div className="grid-box">
              <div className="grid-box-heading">
                <h5>Traffic Channel</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={progressTableButton === "weekData" ? "active" : undefined} onClick={weekTable}>Week</button>
                  <button className={progressTableButton === "monthData" ? "active" : undefined} onClick={monthTable}>Month</button>
                  <button className={progressTableButton === "yearData" ? "active" : undefined} onClick={yearTable}>Year</button>
                </div>
              </div>

              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      <th>Channel</th>
                      <th>Sessions</th>
                      <th>Goal Conv. Rate</th>
                      <th>Goals Completions</th>
                      <th>Percentage of Traffic (%)</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  {Traffic.map((val) => {
                    if (val.name === progressTableButton) {
                      return val.data.map((val, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{val.Channel}</td>
                              <td>{val.Sessions}</td>
                              <td>{val.GoalConvRate}</td>
                              <td>{val.GoalsCompletions}</td>
                              <td>
                                <ProgressBar
                                  style={{ height: "5px" }}
                                  animated
                                  striped
                                  variant={val.color}
                                  now={val.progressbar}
                                />
                              </td>
                              <td>{val.Value}</td>
                            </tr>
                          </tbody>
                        );
                      });
                    }
                    return null;
                  })}
                </Table>
              </div>
            </div>
          </Col>

          <Col xs={12} md={5} xxl={4}>
            <div className="grid-box head">
              <div className="grid-box-heading">
                <h5>Sessions by De...</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={peiTable === "weekData" ? "active" : undefined} onClick={weekTabledPie}>Week</button>
                  <button className={peiTable === "monthData" ? "active" : undefined} onClick={monthTabledPie}>Month</button>
                  <button className={peiTable === "yearData" ? "active" : undefined} onClick={yearTabledPie}>Year</button>
                </div>
              </div>
              {Data.map((val, index) => {
                if (val.name === peiTable) {
                  return (
                    <React.Fragment key={index}>
                      <PieCharts 
                        data={val.data} 
                        DataKey="value" 
                        data768={0.88} 
                        data576={2.8} 
                        data992={1.2} 
                        data1400={0.93}
                        irr={80} 
                        orr={100} />
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </div>
          </Col>

          <Col xs={12} md={7} xxl={6}>
            <div className="grid-box">
              <div className="grid-box-heading">
                <h5>Top Landing Pages</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={progressTabledButton === "weekData" ? "active" : undefined} onClick={weekTabled}>Week</button>
                  <button className={progressTabledButton === "monthData" ? "active" : undefined} onClick={monthTabled}>Month</button>
                  <button className={progressTabledButton === "yearData" ? "active" : undefined} onClick={yearTabled}>Year</button>
                </div>
              </div>

              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      <th>Landing Pages</th>
                      <th>Sessions</th>
                      <th>Bounce Rate</th>
                      <th>CTR</th>
                      <th>Goal Conv. Rate</th>
                    </tr>
                  </thead>
                  {LandingPages.map((val) => {
                    if (val.name === progressTabledButton) {
                      return val.data.map((val, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{val.landingPage}</td>
                              <td>{val.Sessions}</td>
                              <td>{val.bounceRate}</td>
                              <td>{val.ctr}</td>
                              <td>{val.GoalConvRate}</td>
                            </tr>
                          </tbody>
                        );
                      });
                    }
                    return null;
                  })}
                </Table>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="grid-box">
              <div className="grid-box-heading">
                <h5>Sessions by Region</h5>
                <div className="boxsize boxsize-transparent">
                  <button className={mapTableButton === "weekData" ? "active" : undefined} onClick={weekTableMap}>Week</button>
                  <button className={mapTableButton === "monthData" ? "active" : undefined} onClick={monthTableMap}>Month</button>
                  <button className={mapTableButton === "yearData" ? "active" : undefined} onClick={yearTableMap}>Year</button>
                </div>
              </div>

              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      <th>Top Region</th>
                      <th>Sessions</th>
                    </tr>
                  </thead>
                  {Session.map((val) => {
                    if (val.name === mapTableButton) {
                      return val.data.map((data, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{data.topRegion}</td>
                              <td>{data.sessions}</td>
                            </tr>
                          </tbody>
                        );
                      });
                    }
                    return null;
                  })}
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SitePerformance;
