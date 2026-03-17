import type React from 'react';
import type { Sphere } from '../CharitySpheres';
import './SphereCard.scss';

type Props = {
  sphere: Sphere;
};

export const SphereCard: React.FC<Props> = ({ sphere }) => {
  return (
    <article className="sphere-card">
      <sphere.icon />
      <p>{sphere.text}</p>
    </article>
  );
};
