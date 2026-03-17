import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { SwiperImage } from '../../types';
import 'swiper/css';
import './GallerySwiper.scss';

const AUTOPLAY_DELAY = 5000;
type Props = {
  images: SwiperImage[];
};

export const GallerySwiper: React.FC<Props> = ({ images }) => {
  return (
    <Swiper
      className="gallery-swiper"
      modules={[Autoplay]}
      spaceBetween={8}
      slidesPerView={1.4}
      autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        920: {
          slidesPerView: 3,
        },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img.src} alt={img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
