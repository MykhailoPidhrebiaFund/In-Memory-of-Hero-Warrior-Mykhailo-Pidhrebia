import type React from 'react';
import { researchWorks } from './data';
import { ResearchWorkSwiper } from '../ResearchWorkSwiper';
import './ResearchWorks.scss';

export const ResearchWorks: React.FC = () => {
  return (
    <div className="research-works">
      <section className="research-works__section">
        <h4 className="research-works__title">Науково-дослідницька діяльність Михайла</h4>
      </section>

      <div className="research-works__section research-works__section--swiper">
        <ResearchWorkSwiper works={researchWorks} />
      </div>
    </div>
  );
};
