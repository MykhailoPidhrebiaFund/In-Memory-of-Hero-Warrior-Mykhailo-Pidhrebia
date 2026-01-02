import type React from 'react';
import { Document, Page } from 'react-pdf';
import type { ResearchWork } from '../ResearchWorks';
import { BtnType, Button } from '../../../../components/Button';
import './ResearchWorkCard.scss';

type Props = {
  work: ResearchWork;
};

export const ResearchWorkCard: React.FC<Props> = ({ work }) => {
  const handleOpenPDF = () => {
    window.open(work.work, '_blank');
  };

  return (
    <article className="research-work-card">
      <div className="research-work-card__poster">
        <Document file={work.work}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={window.innerWidth <= 768 ? 200 : 410}
          />
        </Document>
      </div>

      <div className="research-work-card__info">
        <div className="research-work-card__description">
          <h4 className="research-work-card__title">{work.title}</h4>
          <p className="research-work-card__author">{work.author}</p>
        </div>

        <div className="research-work-card__btn-wrapper">
          <Button onClick={handleOpenPDF} type={BtnType.SECONDARY}>
            Переглянути
          </Button>
        </div>
      </div>
    </article>
  );
};
