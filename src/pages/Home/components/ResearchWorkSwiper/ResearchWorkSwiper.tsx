import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { ResearchWork } from '../ResearchWorks/types';
import { ResearchWorkCard } from '../ResearchWorkCard';
import 'swiper/css';
import './ResearchWorkSwiper.scss';

const AUTOPLAY_DELAY = 5000;

type Props = {
  works: ResearchWork[];
};

export const ResearchWorkSwiper: React.FC<Props> = ({ works }) => {
  return (
    <div className="research-work-swiper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesOffsetAfter={24}
        slidesPerView={1.2}
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
        breakpoints={{
          1420: {
            slidesPerView: 2,
            slidesOffsetAfter: 0,
          },
        }}
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <ResearchWorkCard work={work} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
