'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = ['Sustainable', 'Healthy', 'Delicious', 'Nutritious', 'Eco-friendly'];

const InfiniteCarousel = () => {
    const settings = {
        infinite: true,
        speed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className='w-full overflow-hidden border-y border-black/10'>
            <Slider {...settings}>
                {items.map((item, i) => (
                    <div key={i} className='flex items-center justify-center px-8 py-4 tracking-wide'>
                        <span className='text-2xl font-semibold md:text-3xl'>{item}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default InfiniteCarousel;
