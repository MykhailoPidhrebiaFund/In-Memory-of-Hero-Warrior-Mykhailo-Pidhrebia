import type React from 'react';
import './Header.scss';
import { Button } from '../../../../components/Button';
import { useNavigate } from 'react-router';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header id="header" className="header">
      <div className="header__img"></div>

      <section className="header__section">
        <h1>
          Михайло <br /> Підгребя
        </h1>
      </section>

      <section className="header__section">
        <div className="header__subsection">
          <h2>“У всіх колись бувають помилки, але це ще не означає, що це кінець.”</h2>
          <h4>-Михайло.</h4>
        </div>

        <div className="header__subsection">
          <Button onClick={() => navigate('/about')}>Про фонд</Button>
        </div>
      </section>
    </header>
  );
};
