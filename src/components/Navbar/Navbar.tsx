import type React from 'react';
import { BrandLogo } from '../BrandLogo';
import { BtnType, Button } from '../Button';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import './Navbar.scss';

export const Navbar: React.FC = () => {
  const [atTop, setAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx('nav', {
        'nav--visible': atTop,
        'nav--hidden-on-scroll': !atTop,
        'nav--collapsed': isOpen,
      })}
    >
      <div className="nav__section">
        <BrandLogo />
      </div>

      <div className="nav__section">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Дитинство
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link">
              Студенство
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link">
              Армія
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link">
              Війна
            </a>
          </li>
        </ul>

        <Button onClick={() => {}} type={BtnType.SECONDARY}>
          Про фонд
        </Button>
      </div>

      <div className="nav__section">
        <button className="nav__btn" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};
