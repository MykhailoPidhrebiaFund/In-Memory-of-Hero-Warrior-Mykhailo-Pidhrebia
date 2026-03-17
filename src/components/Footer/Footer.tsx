import type React from 'react';
import { BrandLogo } from '../BrandLogo';
import { NavLink } from 'react-router';
import './Footer.scss';
import { useAnchorNavigation } from '../../hooks';

export const Footer: React.FC = () => {
  const { goToAnchor } = useAnchorNavigation();

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

            <li className="footer__item">
              <button
                type="button"
                className="footer__link footer__link--button"
                onClick={() =>
                  goToAnchor({
                    path: '/about',
                    anchor: 'contacts',
                  })
                }
              >
                Контакти
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
