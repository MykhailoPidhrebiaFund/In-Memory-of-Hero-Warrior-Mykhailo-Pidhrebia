import type React from 'react';
import { spheres } from './data';
import { SphereCard } from '../SphereCard';
import { Button } from '../../../../components/Button';
import { SphereSwiper } from '../SphereSwiper';
import './CharitySpheres.scss';

export const CharitySpheres: React.FC = () => {
  const redirectToMonobank = () => {
    window.open('https://send.monobank.ua/jar/7uAWUNMLxd', '_blank');
  };

  return (
    <div className="charity-spheres">
      <h3 className="charity-spheres__title">Сферами благодійної діяльності Фонду є:</h3>

      <div className="charity-spheres__spheres">
        <ul className="charity-spheres__list">
          {spheres.map((item, index) => (
            <li key={index} className="charity-spheres__item">
              <SphereCard sphere={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="charity-spheres__swiper">
        <SphereSwiper spheres={spheres} />
      </div>

      <div className="charity-spheres__btn-wrapper">
        <Button onClick={redirectToMonobank}>Монобанка</Button>
      </div>
    </div>
  );
};
