import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./FoodCompanySlider.css";
import img01 from '../../../images/FoodCompanySliderImages/img01.png'
import img02 from '../../../images/FoodCompanySliderImages/img02.png'
import img03 from '../../../images/FoodCompanySliderImages/img03.png'
import img04 from '../../../images/FoodCompanySliderImages/img04.png'
import img05 from '../../../images/FoodCompanySliderImages/img05.png'
import img06 from '../../../images/FoodCompanySliderImages/img06.png'
import { Container } from 'react-bootstrap';
import SwiperCore, {
    Autoplay,
    FreeMode, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);
const FoodCompanySlider = () => {
    return (
        <>
            <Container className="FoodCompanySwiper">
                <Swiper 
                modules={[Autoplay]}
                slidesPerView={4} 
                spaceBetween={30} 
                loop={true}
                speed={1000}
                autoplay={{ delay: 1000 }}
                className="mySwiper">
                    <SwiperSlide><img src={img01} alt="" className='w-100 mx-5' /></SwiperSlide>
                    <SwiperSlide><img src={img02} alt="" className='w-100 mx-5' /></SwiperSlide>
                    <SwiperSlide><img src={img03} alt="" className='w-100 mx-5' /></SwiperSlide>
                    <SwiperSlide><img src={img04} alt="" className='w-100 mx-5' /></SwiperSlide>
                    <SwiperSlide><img src={img05} alt="" className='w-100 mx-5' /></SwiperSlide>
                    <SwiperSlide><img src={img06} alt="" className='w-100 mx-5' /></SwiperSlide>
                </Swiper>
            </Container>
        </>
    );
};

export default FoodCompanySlider;