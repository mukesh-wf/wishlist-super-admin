import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Youtube, Snapchat, Activity, ArrowDown, ArrowUp, Facebook, Linkedin, Instagram, Twitter } from 'react-bootstrap-icons';
import { BiTrendingUp } from 'react-icons/bi';
import { BiTrendingDown } from 'react-icons/bi';
import LoadingImg from '../Image/LoadingIcon.gif';
import TwiterData from '../Data/Chart/Twiter.json';
import TableData from '../Data/Chart/SocialMetrics.json';
import YoutubeSub from '../Data/Chart/YoutubeSubscriber.json';
import Todo from '../Data/Chart/todo.json';
import "react-calendar/dist/Calendar.css";
import Topbar from '../../Hook/Topbar';
import { SmallLine, WithoutXaxis } from '../../Hook/Recharts/LineCharts';
import { DoubleBar } from '../../Hook/Recharts/BarCharts';
import MetaTags from '../HeadTag/MetaTags';

const SocialMedia = () => {
    const [displayImg, setDisplayImg] = useState(false);
    const [loadingTwiter, setLoadingTwiter] = useState(false);
    const [loadingInsta, setLoadingInsta] = useState(false);
    const [loadingLinkdin, setLoadingLinkdin] = useState(false);
    const [twiter, setTwiter] = useState("week");
    const [insta, setInsta] = useState("week");
    const [linkdin, setLinkdin] = useState("week");
    const [facebookMedia, setFacebookMedia] = useState("facebookToday");
    const [youtubeMedia, setYoutubeMedia] = useState("weekData");
    const [tableData, setTableData] = useState("todayData");
    const [active, setActive] = useState(true);
    let Tweet = useRef();
    let Tweet1 = useRef();
    let Tweet2 = useRef();
    let TweetImp = useRef();
    let ReTweet = useRef();
    let Engagement = useRef();
    let NewFollow = useRef();
    const heading = "Social Media Dashboard";


    useEffect(() => {
        setActive(false)
        setTimeout(() => {
            setDisplayImg(false)
            setLoadingTwiter(false)
            setLoadingInsta(false)
            setLoadingLinkdin(false)
        }, 800)
    }, [active, displayImg, loadingTwiter, loadingInsta, loadingLinkdin])

    const todayHandler = () => {
        setFacebookMedia("facebookToday");
    }

    const weekHandler = () => {
        setFacebookMedia("facebookWeek");
    }

    const monthHandler = () => {
        setDisplayImg(true)
        setFacebookMedia("facebookMonth");
    }

    const yearHandler = () => {
        setDisplayImg(true)
        setFacebookMedia("facebookYear");
    }

    const weekYoutubeHandler = () => {
        setYoutubeMedia("weekData");
    }

    const monthYoutubeHandler = () => {
        setYoutubeMedia("monthData");
    }

    const yearYoutubeHandler = () => {
        setYoutubeMedia("yearData");
    }

    const weekTwiterHandler = () => {
        setLoadingTwiter(true)
        setTwiter("week")
    }
    const monthTwiterHandler = () => {
        setLoadingTwiter(true)
        setTwiter("month")
    }

    const yearTwiterHandler = () => {
        setLoadingTwiter(true)
        setTwiter("year")
    }

    const weekInstaHandler = () => {
        setLoadingInsta(true)
        setInsta("week")
    }
    const monthInstaHandler = () => {
        setInsta("month")
        setLoadingInsta(true)
    }

    const yearInstaHandler = () => {
        setInsta("year")
        setLoadingInsta(true)
    }

    const weekLinkdinHandler = () => {
        setLoadingLinkdin(true)
        setLinkdin("week")
    }

    const monthLinkdinHandler = () => {
        setLinkdin("month")
        setLoadingLinkdin(true)
    }

    const yearLinkdinHandler = () => {
        setLinkdin("year")
        setLoadingLinkdin(true)
    }

    const todayTableHandler = () => {
        setTableData("todayData")
    }

    const weekTableHandler = () => {
        setTableData("weekData")
    }

    const monthTableHandler = () => {
        setTableData("monthData")
    }

    const yearTableHandler = () => {
        setTableData("yearData")
    }

    return (
        <>
            <MetaTags title={heading} />
            <Topbar heading={heading} />

            <Container className='main-container socialmedia-page'>
                <Row className='grid-box-row'>

                    <Col xs={12} xxl={4} >
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Social Media Overview</h5>
                            </div>
                            <Row>
                                <Col xs={4} md={2} xxl={4} className='social-overview'>
                                    <div className='social-icon facebook-icon'>
                                        <Facebook className="facebook" />
                                    </div>
                                    <h4>5601</h4>
                                    <p>Likes</p>
                                </Col>
                                <Col xs={4} md={2} xxl={4} className='social-overview'>
                                    <div className='social-icon instagram-icon'>
                                        <Instagram className="instagram" />
                                    </div>
                                    <h4>4601</h4>
                                    <p>Followers</p>
                                </Col>
                                <Col xs={4} md={2} xxl={4} className='social-overview'>
                                    <div className='social-icon twitter-icon'>
                                        <Twitter className='twitter' />
                                    </div>
                                    <h4>3601</h4>
                                    <p>Followers</p>
                                </Col>
                                <Col xs={4} md={2} xxl={4} className='social-overview mb-0'>
                                    <div className='social-icon youtube-icon'>
                                        <Youtube className='youtube' />
                                    </div>
                                    <h4>2601</h4>
                                    <p>Subscribers</p>
                                </Col>
                                <Col xs={4} md={2} xxl={4} className='social-overview mb-0'>
                                    <div className='social-icon linkdin-icon'>
                                        <Linkedin className='linkedin' />
                                    </div>
                                    <h4>5631</h4>
                                    <p>Followers</p>
                                </Col>
                                <Col xs={4} md={2} xxl={4} className='social-overview mb-0'>
                                    <div className='social-icon snapchat-icon'>
                                        <Snapchat className="snapchat" />
                                    </div>
                                    <h4>5701</h4>
                                    <p>Followers</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col xs={12} xxl={8}>
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Facebook overview</h5>
                                <div className="boxsize boxsize-transparent">
                                    <button className={facebookMedia === 'facebookToday' ? "active" : undefined} onClick={todayHandler}>Today</button>
                                    <button className={facebookMedia === 'facebookWeek' ? "active" : undefined} onClick={weekHandler}>Week</button>
                                    <button className={facebookMedia === 'facebookMonth' ? "active" : undefined} onClick={monthHandler}>Month</button>
                                    <button className={facebookMedia === 'facebookYear' ? "active" : undefined} onClick={yearHandler}>Year</button>
                                </div>
                            </div>
                            <Row className='facebook-overview'>
                                <Col lg={6} className='border-right'>
                                    <Row>
                                        <Col lg={6} md={6}>
                                            {displayImg ? <img src={LoadingImg} alt='Loading' /> : Todo.map((data, index) => {
                                                if (data.week === facebookMedia) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <h2>{data.EngagedUsers}</h2>
                                                            <p>Engaged Users</p>
                                                            <p className='status-percentage'><span><BiTrendingUp />25%</span><span> {data.Prev} (Prev)</span></p>

                                                            <WithoutXaxis
                                                                data={data.data}
                                                                line="pv"
                                                                Stroke="#ff0000"
                                                                Dot={false}
                                                            />
                                                        </React.Fragment>
                                                    )
                                                }
                                                return null
                                            })}
                                        </Col>
                                        <Col lg={6} md={6}>
                                            {displayImg ? <img src={LoadingImg} alt='Loading' /> : Todo.map((data, index) => {
                                                if (data.week === facebookMedia) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <h2>{data.PageImp}</h2>
                                                            <p>Page Impressions</p>
                                                            <p className='status-percentage'><span><BiTrendingUp />14% </span><span> {data.Prev} (Prev)</span></p>
                                                            <WithoutXaxis
                                                                data={data.data}
                                                                line="uv"
                                                                Stroke="#0000ff"
                                                                Dot={false}
                                                            />
                                                        </React.Fragment>
                                                    )
                                                }
                                                return null
                                            })}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={6}>
                                    <Row>
                                        <Col lg={6} md={6}>
                                            {displayImg ? <img src={LoadingImg} alt='Loading' /> : Todo.map((data, index) => {
                                                if (data.week === facebookMedia) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <h2>{data.TotalPage}</h2>
                                                            <p>Total Page Likes</p>
                                                            <p className='status-percentage focard-status'><span><BiTrendingDown />12% </span> <span> {data.Prev} (Prev)</span></p>
                                                            <WithoutXaxis
                                                                data={data.data}
                                                                line="pv"
                                                                Stroke="#0040ff"
                                                                Dot={false}
                                                            />
                                                        </React.Fragment>
                                                    )
                                                }
                                                return null
                                            })}
                                        </Col>
                                        <Col lg={6} md={6}>
                                            {displayImg ? <img src={LoadingImg} alt='Loading' /> : Todo.map((data, index) => {
                                                if (data.week === facebookMedia) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <h2>{data.PageImp2}</h2>
                                                            <p>Page Impressions</p>
                                                            <p className='status-percentage'><span><BiTrendingUp />14% </span><span> {data.Prev} (Prev)</span></p>
                                                            <WithoutXaxis
                                                                data={data.data}
                                                                line="uv"
                                                                Stroke="#0088FE"
                                                                Dot={false}
                                                            />
                                                        </React.Fragment>
                                                    )
                                                }
                                                return null
                                            })}
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Row className='grid-box-row'>
                    <Col xs={12} xxl={4}>
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Youtube Subscribers</h5>
                                <div className="boxsize boxsize-transparent">
                                    <button className={youtubeMedia === 'weekData' ? "active" : undefined} onClick={weekYoutubeHandler}>Week</button>
                                    <button className={youtubeMedia === 'monthData' ? "active" : undefined} onClick={monthYoutubeHandler}>Month</button>
                                    <button className={youtubeMedia === 'yearData' ? "active" : undefined} onClick={yearYoutubeHandler}>Year</button>
                                </div>
                            </div>
                            <div className='graph-box'>
                                {YoutubeSub.map((data, index) => {
                                    if (data.name === youtubeMedia) {
                                        return (
                                            <React.Fragment key={index}>
                                                <p>Subscribers</p>
                                                <h2>{data.sub} <small><ArrowUp />{data.growth}</small></h2>
                                                <DoubleBar
                                                    data={data.data}
                                                    DataKeyX="Name"
                                                    DataKeyY={[0, 10]}
                                                    Bar1="Gained"
                                                    Bar2="Lost"
                                                    Fill1="#ff0000"
                                                    Fill2="#00b300"
                                                    aspSoc1200={1.6}
                                                    socialAsp1400={0.8}
                                                    socialAsp1600={1.1}
                                                    socAng1400={-60}
                                                    socX1400 = {-10}
                                                    socY1400 = {6}
                                                />
                                            </React.Fragment>
                                        )
                                    }
                                    return null
                                })}
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className='grid-box'>
                            <Card >
                                <Card.Body>
                                    <div className='grid-box-heading tat'>
                                        <h5>Twitter Overview</h5>
                                        <div className="boxsize boxsize-transparent">
                                            <button className={twiter === 'week' ? "active" : undefined} onClick={weekTwiterHandler}>Week</button>
                                            <button className={twiter === 'month' ? "active" : undefined} onClick={monthTwiterHandler}>Month</button>
                                            <button className={twiter === 'year' ? "active" : undefined} onClick={yearTwiterHandler}>Year</button>
                                        </div>
                                    </div>
                                    {loadingTwiter ? <img src={LoadingImg} alt='Loading' /> : <>

                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Tweets</p>
                                                <h2 className='down'>
                                                    {Tweet.current} <small><ArrowDown />25%</small>
                                                </h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.Twitter === twiter) {
                                                        data.data.map((data) => {
                                                            Tweet.current = data.tweets
                                                            TweetImp.current = data.tweetsImp
                                                            ReTweet.current = data.retweets
                                                            Engagement.current = data.engagement
                                                            NewFollow.current = data.newFollow
                                                            return null
                                                        })
                                                    }
                                                    if (data.name === "first")
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    return null
                                                })
                                                }
                                            </Col>
                                        </Row>
                                        {/* -------second------ */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Tweets</p>
                                                <h2 className='down'>
                                                    {TweetImp.current} <small><ArrowDown />25%</small>
                                                </h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "second") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })
                                                }
                                            </Col>
                                        </Row>
                                        {/* -------third------- */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Retweets</p>
                                                <h2 className='down'>
                                                    {ReTweet.current} <small><Activity />30%</small>
                                                </h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "third") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* --------fourth------- */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Engagement rate</p>
                                                <h2>
                                                    {Engagement.current} <small><ArrowUp />34%</small>
                                                </h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "forth") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* ---------fifth--------- */}
                                        <Row className='graph-box mb-0'>
                                            <Col xxl={5}>
                                                <p>New followers</p>
                                                <h2>
                                                    {NewFollow.current} <small><ArrowUp />27%</small>
                                                </h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "first") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                    </>}
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className='grid-box'>
                            <Card >
                                <Card.Body>
                                    <div className='grid-box-heading tat'>
                                        <h5>Instagram Overview </h5>
                                        <div className="boxsize boxsize-transparent">
                                            <button className={insta === 'week' ? "active" : undefined} onClick={weekInstaHandler}>Week</button>
                                            <button className={insta === 'month' ? "active" : undefined} onClick={monthInstaHandler}>Month</button>
                                            <button className={insta === 'year' ? "active" : undefined} onClick={yearInstaHandler}>Year</button>
                                        </div>
                                    </div>
                                    {loadingInsta ? <img src={LoadingImg} alt='Loading' /> : <>
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Post</p>
                                                <h2 className='down'>{Tweet1.current} <small><ArrowDown />25%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.Instagram === insta) {
                                                        data.data.map((data) => {
                                                            Tweet1.current = data.tweets
                                                            TweetImp.current = data.tweetsImp
                                                            ReTweet.current = data.retweets
                                                            Engagement.current = data.engagement
                                                            NewFollow.current = data.newFollow
                                                            return null
                                                        })
                                                    }
                                                    if (data.name === "first") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* -------second------ */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Like</p>
                                                <h2>{TweetImp.current}  <small><ArrowUp />108%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "second") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* -------third------- */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Comments</p>
                                                <h2 className='down'>{ReTweet.current} <small><Activity />30%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "third") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* --------fourth------- */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>New Followers</p>
                                                <h2>{Engagement.current}<small><ArrowUp />34%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "forth") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* ---------fifth--------- */}
                                        <Row className='graph-box mb-0'>
                                            <Col xxl={5}>
                                                <p>Following</p>
                                                <h2>{NewFollow.current} <small><ArrowUp />27%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "first") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                    </>}
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className='grid-box'>
                            <Card >
                                <Card.Body>
                                    <div className='grid-box-heading tat'>
                                        <h5>Linkedin Overview</h5>
                                        <div className="boxsize boxsize-transparent">
                                            <button className={linkdin === 'week' ? "active" : undefined} onClick={weekLinkdinHandler}>Week</button>
                                            <button className={linkdin === 'month' ? "active" : undefined} onClick={monthLinkdinHandler}>Month</button>
                                            <button className={linkdin === 'year' ? "active" : undefined} onClick={yearLinkdinHandler}>Year</button>
                                        </div>
                                    </div>
                                    {loadingLinkdin ? <img src={LoadingImg} alt='Loading' /> : <>
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Clicks</p>
                                                <h2 className='down'>{Tweet2.current} <small><ArrowDown />25%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.Linkedin === linkdin) {
                                                        data.data.map((data) => {
                                                            Tweet2.current = data.tweets
                                                            TweetImp.current = data.tweetsImp
                                                            ReTweet.current = data.retweets
                                                            Engagement.current = data.engagement
                                                            NewFollow.current = data.newFollow
                                                            return null
                                                        })
                                                    }

                                                    if (data.name === "first") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* -------second------ */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Like</p>
                                                <h2>{TweetImp.current} <small><ArrowUp />108%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "second") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* -------third------- */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>Comments</p>
                                                <h2 className='down'>{ReTweet.current} <small><Activity />30%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "third") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* --------fourth------- */}
                                        <Row className='graph-box'>
                                            <Col xxl={5}>
                                                <p>New Followers</p>
                                                <h2>{Engagement.current} <small><ArrowUp />34%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "forth") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                        {/* ---------fifth--------- */}
                                        <Row className='graph-box mb-0'>
                                            <Col xxl={5}>
                                                <p>Following</p>
                                                <h2>{NewFollow.current} <small><ArrowUp />34%</small></h2>
                                            </Col>
                                            <Col xxl={7}>
                                                {TwiterData.map((data, index) => {
                                                    if (data.name === "first") {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <SmallLine data={data.data} />
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </Col>
                                        </Row>
                                    </>}
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col xs={12} xxl={8}>
                        <div className='grid-box'>
                            <div className='grid-box-heading'>
                                <h5>Social Traffic Metrics</h5>
                                <div className="boxsize boxsize-transparent">
                                    <button className={tableData === 'todayData' ? "active" : undefined} onClick={todayTableHandler}>Today</button>
                                    <button className={tableData === 'weekData' ? "active" : undefined} onClick={weekTableHandler}>Week</button>
                                    <button className={tableData === 'monthData' ? "active" : undefined} onClick={monthTableHandler}>Month</button>
                                    <button className={tableData === 'yearData' ? "active" : undefined} onClick={yearTableHandler}>Year</button>
                                </div>
                            </div>
                            <div className='table-responsive'>
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Social Network</th>
                                            <th>Users</th>
                                            <th>New Users</th>
                                            <th>Sessions</th>
                                            <th>Bounce Rate</th>
                                            <th>Pages/Session</th>
                                            <th>Avg. Session Duration</th>
                                        </tr>
                                    </thead>
                                    {TableData.map((data) => {
                                        if (data.name === tableData) {
                                            return (
                                                data.data.map((data, index) => {
                                                    return (
                                                        <tbody key={index}>
                                                            <tr>
                                                                <td>{data.name}</td>
                                                                <td>{data.users}</td>
                                                                <td>{data.newusers}</td>
                                                                <td>{data.sessions}</td>
                                                                <td>{data.bounceRate}</td>
                                                                <td>{data.page}</td>
                                                                <td>{data.sessionDuration}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            )
                                        }
                                        return null
                                    })}
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SocialMedia;
