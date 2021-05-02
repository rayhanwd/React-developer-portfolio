
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import './Testimonial.css';
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import TestimonialCard from "./TestimonialCard";
import { Container } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


const Testimonial = () => {



    return (
        <div className="bg-light my-5">
            <div className="text-center  py-5">
                <h4 className="skill-info-text mb-0">Testimonials</h4>
                <div className="testimonial-border"></div>
            </div>
            <Container>
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false

                }} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper pb-5">
                    <SwiperSlide>
                        <TestimonialCard></TestimonialCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard></TestimonialCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard></TestimonialCard>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}
export default Testimonial;