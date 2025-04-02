
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Autoplay } from 'swiper/modules';
import t1 from '../assets/images/t1.jpg'
import t2 from '../assets/images/t2.jpg'


const Testimonials = () => {
    return (
         <div className="  relative flex justify-center  items-center w-full mt-10 text-center overflow-x-hidden "
              style={{
                backgroundImage: `url(${t1})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                height: '100vh',
        
              }}><div className=" hero bg-black opacity-60 absolute inset-0 z-0"></div>

              <h1 style={{fontFamily: 'rubik'}} className='text-white text-[32px] absolute top-8'>Testimonials</h1>

            <Swiper
                slidesPerView={3} // Default for large screens
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1, // Mobile screens
                    },
                    768: {
                        slidesPerView: 3, // Tablets and larger screens
                    },
                }}
                modules={[ Autoplay]}
                className="mySwiper mt-16 md:mt-44 lg:mt-20 absolute md:left-0 xl:botttom-[2rem] md:bottom-[4rem]  lg:bottom-[1.5rem] xl:left-[0.1rem]  lg:left-[0.7rem]"
            >
                <SwiperSlide >
                    <div className="flex flex-col justify-center items-center space-y-8 text-center w-full  ">
                    <p style={{ fontFamily: 'monserat' }} className=" testify  bg-white w-[20rem] shrink-0 xl:w-96 lg:w-[21rem] md:w-[16.3rem] lg:text-[16px] md:text-[14px]  h-40 rounded-lg pt-8">
                        Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. Lorem Ipsum has been the <br /> industry.
                    </p>
                    <div className="flex flex-col  space-y-1 items-center  "> {/* Wrap the image in a flex container */}
                        <img className="w-[74px] h-[74px] rounded-full " src={t2} alt="img" />
                        <p className="text-white">Olivia Obasanjo</p>
                        <p className='text-white'>Student</p>
                    </div>
                    </div>
                   
                   
                </SwiperSlide>

                <SwiperSlide >
                    <div className="flex flex-col justify-center items-center space-y-8 text-center w-full  ">
                    <p style={{ fontFamily: 'monserat' }} className="  bg-[#3A5829] text-white w-[20rem] shrink-0 xl:w-96 lg:w-[21rem] md:w-[16.3rem] lg:text-[16px] md:text-[14px] h-40 rounded-lg pt-8">
                        Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. Lorem Ipsum has been the <br /> industry.
                    </p>
                    <div className="flex flex-col  space-y-1 items-center  "> {/* Wrap the image in a flex container */}
                        <img className="w-[74px] h-[74px] rounded-full " src={t2} alt="img" />
                        <p className="text-white">Olivia Obasanjo</p>
                        <p className='text-white'>Student</p>
                    </div>
                    </div>

                   
                </SwiperSlide>

                <SwiperSlide >
                    <div className="flex flex-col justify-center items-center space-y-8 text-center w-full  ">
                    <p style={{ fontFamily: 'monserat' }} className=" testify  bg-white w-[20rem] shrink-0 xl:w-96 lg:w-[21rem] md:w-[16.3rem] lg:text-[16px] md:text-[14px] h-40 rounded-lg pt-8">
                        Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. Lorem Ipsum has been the <br /> industry.
                    </p>
                    <div className="flex flex-col  space-y-1 items-center  "> {/* Wrap the image in a flex container */}
                        <img className="w-[74px] h-[74px] rounded-full " src={t2} alt="img" />
                        <p className="text-white">Olivia Obasanjo</p>
                        <p className='text-white'>Student</p>
                    </div>
                    </div>
                   
                   
                </SwiperSlide>

                <SwiperSlide >
                    <div className="flex flex-col justify-center items-center space-y-8 text-center w-full  ">
                    <p style={{ fontFamily: 'monserat' }} className="  bg-[#3A5829] text-white w-[20rem] shrink-0 xl:w-96 lg:w-[21rem] md:w-[16.3rem] lg:text-[16px] md:text-[14px] h-40 rounded-lg pt-8">
                        Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. Lorem Ipsum has been the <br /> industry.
                    </p>
                    <div className="flex flex-col  space-y-1 items-center  "> {/* Wrap the image in a flex container */}
                        <img className="w-[74px] h-[74px] rounded-full " src={t2} alt="img" />
                        <p className="text-white">Olivia Obasanjo</p>
                        <p className='text-white'>Student</p>
                    </div>
                    </div>
                    
                   
                </SwiperSlide>

                <SwiperSlide >
                    <div className="flex flex-col justify-center items-center space-y-8 text-center w-full  ">
                    <p style={{ fontFamily: 'monserat' }} className=" testify  bg-white w-[20rem] shrink-0 xl:w-96 lg:w-[21rem] md:w-[16.3rem] lg:text-[16px] md:text-[14px] h-40 rounded-lg pt-8">
                        Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. Lorem Ipsum has been the <br /> industry.
                    </p>
                    <div className="flex flex-col  space-y-1 items-center  "> {/* Wrap the image in a flex container */}
                        <img className="w-[74px] h-[74px] rounded-full " src={t2} alt="img" />
                        <p className="text-white">Olivia Obasanjo</p>
                        <p className='text-white'>Student</p>
                    </div>
                    </div>
                    
                   
                </SwiperSlide>

                <SwiperSlide >
                     <div className="flex flex-col justify-center items-center space-y-8 text-center w-full  ">
                    <p style={{ fontFamily: 'monserat' }} className="  bg-[#3A5829] text-white w-[20rem] shrink-0  xl:w-96 lg:w-[21rem] md:w-[16.3rem] lg:text-[16px] md:text-[14px] h-40 rounded-lg pt-8">
                        Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. Lorem Ipsum has been the <br /> industry.
                    </p>
                    <div className="flex flex-col  space-y-1 items-center  "> {/* Wrap the image in a flex container */}
                        <img className="w-[74px] h-[74px] rounded-full " src={t2} alt="img" />
                        <p className="text-white">Olivia Obasanjo</p>
                        <p className='text-white'>Student</p>
                    </div>
                    </div>
                   
                   
                </SwiperSlide>
               

            </Swiper>
        </div>
    )
}

export default Testimonials