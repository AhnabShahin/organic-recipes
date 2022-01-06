import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Banner.css";
import img01 from '../../../images/banners/img01.jpg'
import img02 from '../../../images/banners/img02.png'
import img03 from '../../../images/banners/img03.png'
import img04 from '../../../images/banners/img04.png'

import { Container, Row, Col } from 'react-bootstrap';
import SwiperCore, {
    Autoplay,
    FreeMode, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);
const Banner = () => {
    return (
            <div className='banner-section'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 2000 }}
                    className="mySwiper">
                    <SwiperSlide>
                        <Container>
                            <div className="banner-slide">
                                <Row className="h-100">
                                    <Col md={6}>
                                        <div className="banner-slide-details">
                                            <h3>SIMPLE RECIPES MADE FOR REAL, ACTUAL, EVERYDAY LIFE</h3>
                                        </div>
                                    </Col>
                                    <Col md={6} className="h-100">
                                        <div className="banner-img">
                                            <img src={img04} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Container>
                            <div className="banner-slide">
                                <Row className="h-100">
                                    <Col md={6} >
                                        <div className="banner-slide-details"><h3>Join Our January Meal Planning Bootcamp!</h3></div>
                                    </Col>
                                    <Col md={6} className="h-100">
                                        <div className="banner-img">
                                            <img src={img03} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Container>
                            <div className="banner-slide">
                                <Row className="h-100">
                                    <Col md={6}>
                                        <div className="banner-slide-details">
                                            <h3>We’ve organized these recipes every way we could think of so you don't have to!</h3>
                                        </div>
                                    </Col>
                                    <Col md={6} className="h-100">
                                        <div className="banner-img">
                                            <img src={img02} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </SwiperSlide>
                </Swiper>
            </div>
    );
};

export default Banner;