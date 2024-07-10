import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ContentRouter from '../../Route/ContentRouter';
import TopHeader from './Header/TopHeader';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Loading from '../../Hook/Spinner';
import { useDispatch } from 'react-redux';
import { utils } from '../Store/Utils';
import PageNotFound from '../404Error/PageNotFound';

const Dashboard = () => {
    const selectedLayoutTheme = useSelector(state => state.colorTheme.layoutTheme);
    const selectedNavbarTheme = useSelector(state => state.colorTheme.navbarTheme);
    const newLoading = useSelector(state => state.utils.layoutStatus);
    const newDisplay = useSelector(state => state.utils.display);
    const check = true;
    const dispatch = useDispatch();
    dispatch(utils.handleCheck(check))
    localStorage.setItem("check", check)


    let layoutType;

    if (selectedLayoutTheme === "right-align-layout") {
        layoutType = true
    }
    else {
        layoutType = false
    }


    return (
        <>
            {newLoading ? <Loading />
                :
                <>
                    {selectedNavbarTheme !== "top-align-layout" &&
                        <>
                            {selectedLayoutTheme === "left-align-layout" &&
                                <>
                                    {newDisplay === true
                                        ?
                                        <PageNotFound />
                                        :
                                        <>
                                            <Header />
                                            <Sidebar />
                                        </>}
                                </>
                            }

                            {selectedLayoutTheme === "right-align-layout" &&
                                <>
                                    {newDisplay === true
                                        ?
                                        <PageNotFound />
                                        :
                                        <Row>
                                            <Header />
                                            <Col>
                                                <Sidebar />
                                            </Col>
                                        </Row>
                                    }

                                </>
                            }
                        </>
                    }

                    {selectedNavbarTheme === "top-align-layout" &&
                        <React.Fragment >
                            <TopHeader />
                            <div className='main-layout' style={{ direction: layoutType ? 'rtl' : 'ltr' }}>
                                    <ContentRouter />
                                    <Footer />
                            </div>
                        </React.Fragment>
                    }
                </>}
        </>
    )
}


export default Dashboard;