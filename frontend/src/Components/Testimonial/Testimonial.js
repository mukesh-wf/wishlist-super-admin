import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import testimonial from '../Data/Testimonial/Testimonial.json';
import Card from 'react-bootstrap/Card';
import quotes from '../Image/Quotes.png';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const Testimonial = () => {
  const heading = "Testimonials";

  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  }


  const responsive4 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  }


  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='testimonilas-page'>
        <Row className='test'>
          <div className='mb-5 testimonials-main testimonial-slider1'>
            <h4 className='text-center mb-3'>Testimonial 1</h4>
            <Carousel
              infinite={true}
              arrows={false}
              responsive={responsive1}
              showDots={true} 
 
            >
              {testimonial.map((val, index) => (
                <React.Fragment key={index}>
                  <div key={index} className='text-center align-items-center testimonial-inner-box'>
                    <Card.Img variant="top" src={val.img} style={{ width: "120px", height: "120px" }} className='mb-3' />
                    <Card.Body>
                      <Card.Title>{val.name}</Card.Title>
                      <Card.Subtitle className="text-muted mb-3">{val.role}</Card.Subtitle>
                      <Card.Text className='text-center'>{val.des}</Card.Text>
                    </Card.Body>
                  </div>
                </React.Fragment>
              ))}
            </Carousel>
          </div>

          <div className='my-5 testimonials-main testimonials-main2'>
            <h4 className='text-center mb-3'>Testimonial 2</h4>
            <Carousel
              infinite={true}
              arrows={false}
              responsive={responsive2}
              showDots={true}
            >
              {testimonial.map((val, index) => (
                <React.Fragment key={index}>
                  <div key={index} className='text-center align-items-center testimonial-inner-box'>
                    <div className='d-flex align-items-center m-3'>
                        <Card.Img variant="top" src={val.img} style={{ width: "120px", height: "120px" }} />
                      <div className='ms-1'>
                        <Card.Title>{val.name}</Card.Title>
                        <Card.Subtitle className="text-muted mb-3">{val.role}</Card.Subtitle>
                      </div>

                      <div className='quote-icon'>
                        <Card.Img variant="top" src={quotes} style={{ width: "50px", height: "40px" }} />
                      </div>
                    </div>

                    <Card.Body className='text-center'>
                      <Card.Text className='text-center'>{val.des}</Card.Text>
                    </Card.Body>
                  </div>
                </React.Fragment>
              ))}
            </Carousel>
          </div>

          <div className='my-5 testimonials-main testimonial-slider3'>
            <h4 className='text-center mb-3'>Testimonial 3</h4>
            <Carousel
              infinite={true}
              arrows={false}
              responsive={responsive4}
              showDots={true}
            >
              {testimonial.map((val, index) => (
                <React.Fragment key={index}>
                  <div key={index} className='text-center align-items-center testimonial-inner-box'>
                    <Card.Text className='my-5'></Card.Text>
                    <Card.Body className='mt-5'>
                      <Card.Text className='text-center mb-3'>{val.des}</Card.Text>
                      <Card.Title>{val.name}</Card.Title>
                      <Card.Subtitle className="text-muted mb-3">{val.role}</Card.Subtitle>
                    </Card.Body>
                  </div>
                </React.Fragment>
              ))}
            </Carousel>
          </div>

          <div className='my-5 testimonials-main testimonial-slider4'>
            <h4 className='text-center mb-3'>Testimonial 4</h4>
            <Carousel
              infinite={true}
              arrows={false}
              responsive={responsive4}
              showDots={true}
            >
              {testimonial.map((val, index) => (
                <React.Fragment key={index}>
                  <div key={index} className='text-center align-items-center testimonial-inner-box'>
                    <Card.Img variant="top" src={val.img} style={{ width: "120px", height: "120px" }} className='my-2' />
                    <Card.Body>
                      <Card.Text className='text-center mb-3'>{val.des}</Card.Text>
                      <Card.Title>{val.name}</Card.Title>
                      <Card.Subtitle className="text-muted mb-3">{val.role}</Card.Subtitle>
                    </Card.Body>
                  </div>
                </React.Fragment>
              ))}
            </Carousel>
          </div>
        </Row>
      </Container >
    </>
  )
}

export default Testimonial;