import type React from 'react';
import { BrandLogo } from '../BrandLogo';
import { NavLink } from 'react-router';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <BrandLogo />
      </div>

      <div className="footer__section">
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <NavLink to="/" className="footer__link">
                Головна
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink to="/about" className="footer__link">
                Про фонд
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink to="/privacy-policy" className="footer__link">
                Політика конфідеційності
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
