import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar"
import Image from 'next/image';
import { useEffect } from 'react'
import ProjectsCarouselCard from '@/components/viewComponents/ProjectsCarouselCard';
import { isTemplateExpression } from 'typescript';
import { CarouselCardData, CarouselCardDataType } from '@/components/utils/CarouselCardData';

export default function ProjectCarousel() {
    return (
        <div className={`py-8 text-center w-full bg-[#F3F4F6] dark:bg-gradient-to-tr  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
                <a id="projectcarousel"></a>
                <p className="text-4xl font-semibold underline">All Projects</p>

                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    loop={true}
                    slidesPerView={4}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        //@ts-ignore
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="swiper_container mt-6 "
                    breakpoints={{
                        // 300: {
                        //     slidesPerView: 1,
                        // },
                        // 800: {
                        //     slidesPerView: 1,
                        // },
                        // 1200:{
                        //     slidesPerView:2,
                        // }
                        320: {
                            slidesPerView: 1,
                          },
                          // when window width is >= 480px
                          640: {
                            slidesPerView: 1,
                          },
                          // when window width is >= 640px
                          1024: {
                            slidesPerView: 3,
                          }
                    }}
                >
                    <div className="mt-10 px-4">
                        {CarouselCardData.map((item: CarouselCardDataType, index: number) =>
                            <SwiperSlide key={index + 9578662}>
                                <ProjectsCarouselCard data={item} />
                            </SwiperSlide>
                        )}
                    </div>
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow "></div>
                        <div className="swiper-button-next slider-arrow"></div>
                    </div>
                    <div className='-mb-2 swiper-pagination'></div>
                </Swiper>
            </div>
    )
}





