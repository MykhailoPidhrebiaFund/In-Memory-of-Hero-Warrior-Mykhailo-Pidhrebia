import type React from 'react';
import { GallerySwiper } from '../GallerySwiper';
import { paintings, verses } from './data';
import { VerseList } from '../VerseList';
import { Button } from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';
import './CreativeJourney.scss';

export const CreativeJourney: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="creative-journey">
      <section className="creative-journey__section">
        <h4 className="creative-journey__title">Михайло у творчості</h4>
      </section>

      <div className="creative-journey__section creative-journey__section--swiper">
        <GallerySwiper images={paintings} />
      </div>

      <section className="creative-journey__section creative-journey__section--author">
        <p className="creative-journey__author">Автор: Владислава Підгребя </p>
      </section>

      <section className="creative-journey__section creative-journey__section--verse">
        <VerseList verses={verses} />
      </section>

      <section className="creative-journey__section creative-journey__section--btn">
        <Button onClick={() => navigate('/about')}>Про фонд</Button>
      </section>
    </div>
  );
};
