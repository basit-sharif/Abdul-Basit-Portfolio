import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar"
import Image from 'next/image';
import { useEffect } from 'react';


export default function Testimonials() {

    return (
        <div className='overflow-hidden py-8 bg-[#F3F4F6] dark:bg-gradient-to-tl  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom'>
            <div id="testimonials" />
            <div className='flex-col md:flex-row py-4 px-3 sm:px-0 md:px-9 flex items-center justify-between w-full h-[30rem] bg-[#F3F4F6] dark:bg-[#1F425D] relative mx-auto max-w-none md:max-w-7xl'>
                <h3 className='z-0 absolute top-10 left-8 font-outline-4 text-transparent hidden md:block text-6xl dark:text-[8rem] font-bold'>Reviews</h3>
                <div className='z-20 space-y-2 md:space-y-4 mt-0 md:-mt-6 fade_left'>
                    <p className='text-[#c75e5e] dark:text-gray-400'><hr className='mb-1 mr-1 inline-block w-16' />What My Clients Say</p>
                    <h3 className='text-subHeading dark:text-white text-4xl md:text-6xl font-bold'>Testimonials</h3>
                    <p className='text-subHeading dark:text-white'>What People Say About Me And About My Services</p>
                </div>
                <div className='max-w-[21rem] sm:max-w-[24rem] md:max-w-[46rem]'>
                    <Swiper
                        autoplay={{
                            delay: 5000,
                        }}
                        // speed={800}
                        grabCursor={true}
                        spaceBetween={15}
                        loop={true}
                        slidesPerView={2}
                        centeredSlidesBounds={true}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            //@ts-ignore
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="swiper_container"
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                            },
                            800: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {data.map((item: dataType, index: number) =>
                            <SwiperSlide key={index + 34536}>
                                <div className='flex flex-col items-center pt-10 relative'>
                                    <div className=' absolute top-0 rounded-full w-24 h-24 border-4 overflow-hidden'>
                                        <Image width={100} height={80} src={item.image} alt="Person" />
                                    </div>
                                    <div className='bg-white px-6 pb-4 pt-14  text-center space-y-1 md:space-y-3'>
                                        <h3 className='text-[#1F425D] text-xl md:text-2xl font-bold'>{item.name}</h3>
                                        <p className='text-gray-700  md:text-lg font-serif'>{item.text}</p>
                                        <Image className='mx-auto' width={100} height={80} src={"/reviews.jpg"} alt="review icon" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow "></div>
                            <div className="swiper-button-next slider-arrow"></div>
                        </div>
                        <div className='-mb-2 swiper-pagination'></div>
                    </Swiper>
                </div>
            </div>
        </div >
    );
}

interface dataType {
    image: any,
    name: string,
    text: string,
}

const data: Array<dataType> = [
    {
        image: "/basit.jpg",
        name: "Abdul-Basit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem in assumenda temporibus voluptatum expedita perferendis vitae aliquam, laboriosam saepe. Quaerat vitae odit.",
    },
    {
        image: "/basit.jpg",
        name: "Abdul-Basit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem in assumenda temporibus voluptatum expedita perferendis vitae aliquam, laboriosam saepe. Quaerat vitae odit.",
    },
    {
        image: "/basit.jpg",
        name: "Abdul-Basit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem in assumenda temporibus voluptatum expedita perferendis vitae aliquam, laboriosam saepe. Quaerat vitae odit.",
    },
    {
        image: "/basit.jpg",
        name: "Abdul-Basit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem in assumenda temporibus voluptatum expedita perferendis vitae aliquam, laboriosam saepe. Quaerat vitae odit.",
    },
    {
        image: "/basit.jpg",
        name: "Abdul-Basit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem in assumenda temporibus voluptatum expedita perferendis vitae aliquam, laboriosam saepe. Quaerat vitae odit.",
    },
]