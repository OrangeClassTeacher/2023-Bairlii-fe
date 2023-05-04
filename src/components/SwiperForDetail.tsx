import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SwiperForDetail({ data }: any) {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 44,
                    stretch: 1,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
                pagination={true}
                navigation={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {data?.propertyID?.photos?.map((item: string, index: number) => {
                    return (
                        <div key={index}>
                            <SwiperSlide>
                                <div className="h-96">
                                    <img
                                        src={item}
                                        alt="haha"
                                        className="object-fill w-full h-full rounded-lg drop-shadow-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        </div>
                    );
                })}
            </Swiper>
        </>
    );
}
