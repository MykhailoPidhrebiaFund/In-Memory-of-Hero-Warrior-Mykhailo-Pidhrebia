import type React from 'react';
import type { Verse } from '../CreativeJourney';
import './VerseList.scss';

type Props = {
  verses: Verse[];
};

export const VerseList: React.FC<Props> = ({ verses }) => {
  const trimParagraph = (paragraph: string) => {
    return paragraph
      .split('\n')
      .map((line) => line.trim())
      .join('\n');
  };

  return (
    <ul className="verse-list">
      {verses.map((verse, index) => (
        <li key={index} className="verse-list__item">
          <article className="verse-list__verse">
            <div className="verse-list__verse-content">
              {verse.paragraphs.map((paragraph, index) => (
                <pre key={index} className="verse-list__paragraph">
                  {trimParagraph(paragraph)}
                </pre>
              ))}
            </div>

            <p className="verse-list__author">{verse.author}</p>
          </article>
        </li>
      ))}
    </ul>
  );
};
