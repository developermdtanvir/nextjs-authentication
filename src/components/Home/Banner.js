"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Navigation } from 'swiper';
import image1 from '../../assets/home/image1.jpg';
import image2 from '../../assets/home/image2.jpg';
import image3 from '../../assets/home/image3.png';
import image4 from '../../assets/home/image4.jpg';
import image5 from '../../assets/home/image5.png';
import image6 from '../../assets/home/image6.png';


function Banner() {




    return (
        <div className='h-screen'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Image src={image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image3} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image4} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image6} />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Banner;