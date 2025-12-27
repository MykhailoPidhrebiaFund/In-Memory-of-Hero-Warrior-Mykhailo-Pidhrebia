import type React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="about-header">
      <div className="about-header__wrapper">
        <h1 className="about-header__title">Про фонд</h1>

        <h4 className="about-header__subtitle">
          Благодійний фонд Михайла Підгребі був створений з метою увіковічнення пам'яті воїна-героя,
          який віддав життя за Україну.
        </h4>
      </div>
    </header>
  );
};
