import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SphereCard } from '../SphereCard';
import type { Sphere } from '../CharitySpheres';
import 'swiper/css';

const AUTOPLAY_DELAY = 5000;

type Props = {
  spheres: Sphere[];
};

export const SphereSwiper: React.FC<Props> = ({ spheres }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={8}
      slidesPerView={1.1}
      autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
      loop={true}
    >
      {spheres.map((sphere, index) => (
        <SwiperSlide key={index}>
          <SphereCard sphere={sphere} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
