import type React from 'react';
import { useNavigate } from 'react-router';
import { BrandLogo } from '../BrandLogo';
import { BtnType, Button } from '../Button';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import './Navbar.scss';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'childhood', label: 'Дитинство' },
    { id: 'studentship', label: 'Студенство' },
    { id: 'army', label: 'Армія' },
    { id: 'war', label: 'Війна' },
  ];

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
          {navItems.map((item) => (
            <li key={item.id} className="nav__item">
              <button onClick={() => scrollTo(item.id)} className="nav__link">
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Button onClick={() => navigate('/about')} type={BtnType.SECONDARY}>
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
