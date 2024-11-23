'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselItems } from '@/config';
import { useMediaQuery } from '@/lib/use-media-query';

const InfiniteCarousel = () => {
    const mobile = !useMediaQuery('(min-width: 768px)');

    const settings = {
        infinite: true,
        speed: 6000,
        slidesToShow: mobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        dots: false,
    };

    console.log(mobile);
    return (
        <div className='w-full overflow-hidden border-y border-black/10'>
            <Slider {...settings}>
                {carouselItems.map((item, i) => (
                    <div key={i} className='flex items-center justify-center px-8 py-4 tracking-wide'>
                        <span className='w-fit text-2xl font-semibold md:text-3xl'>{item}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default InfiniteCarousel;
