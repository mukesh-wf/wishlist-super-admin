import React from 'react';
import ChangePassword from './ChangePassword';
import { Tab, Row, Col, Container, Nav } from 'react-bootstrap';
import Profile from './Profile';
import cameraImg from '../Image/camera.svg';
import AccountSetting from './AccountSetting';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const MainSettingPage = () => {
const heading = "Profile Setting";
  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />
 
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Container className='main-container profilesetting'>
          <Row className='grid-box-row'>
            <Col md={4} lg={3}>
              <div className='grid-box'>
                <div className="profile-img">
                  <img src={"https://demo.dashboardmarket.com/strikingdash-vue/img/1.459b89d8.png"} alt='demo' className="imgprofile" />
                  <span><img src={cameraImg} alt='demo' className="cameraimg" />
                  </span>
                </div>

                <div className='profile-ul'>
                    <h4>Duran Clayton</h4>
                    <h5>UI/UX Designer</h5>
                </div>

                <hr />
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first"><i className='fa fa-user'></i>Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second"><i className='fa fa-gear'></i>Account Setting</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third"><i className='fa fa-key'></i>Change Password</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>


            <Col md={8} lg={9}>
                <div className="cover-image">
                  <img src={"https://demo.dashboardmarket.com/strikingdash-vue/img/cover-img.31922ec1.png"} alt='demo' />
                </div>
                <div className='grid-box'>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Profile />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <AccountSetting />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ChangePassword />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </Row>
          </Container>
        </Tab.Container>
    </>
  )
}

export default MainSettingPage;