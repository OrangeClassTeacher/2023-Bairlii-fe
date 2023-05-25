import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";

export default function SwiperForDetail({ data }: any): JSX.Element {
  return (
    <div className="shadow-lg bg-white rounded-lg border p-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={3}
        initialSlide={2}
        coverflowEffect={{
          rotate: 44,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
      >
        {data?.propertyID?.photos?.map((item: string, index: number) => (
          <div key={index}>
            <SwiperSlide>
              <div className="h-96">
                <Image
                  height={1000}
                  width={1000}
                  src={item}
                  alt="haha"
                  className="object-cover w-full h-full rounded-lg drop-shadow-lg"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
