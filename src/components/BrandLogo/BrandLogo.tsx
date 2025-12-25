import type React from 'react';
import './BrandLogo.scss';
import { Link } from 'react-router';

export const BrandLogo: React.FC = () => {
  return (
    <Link to="/" className="brand-logo">
      Памʼяті воїна-героя
      <span className="brand-logo__name">Михайла Підгребі</span>
    </Link>
  );
};
