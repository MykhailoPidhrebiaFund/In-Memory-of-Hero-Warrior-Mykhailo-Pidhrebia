import type React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { BrandLogo } from '../BrandLogo';
import { BtnType, Button } from '../Button';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import './Navbar.scss';

const DELAY_TO_SCROLL = 200;

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [atTop, setAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false); // new helper

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      closeNav();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigateToSection = (id: string) => {
    closeNav();

    if (location.pathname === '/' || location.pathname === '/home') {
      scrollTo(id);
    } else {
      navigate('/', { state: { scrollToId: id } });
    }
  };

  useEffect(() => {
    const id = location.state?.scrollToId;

    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, DELAY_TO_SCROLL);
    }
  }, [location]);

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
        'nav--privacy-policy': location.pathname === '/privacy-policy',
        'nav--about': location.pathname === '/about',
      })}
    >
      <div className="nav__wrapper">
        <div className="nav__section" onClick={() => navigateToSection('header')}>
          <div className="nav__brand">
            <BrandLogo />
          </div>
        </div>

        <div className="nav__section">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <button onClick={() => navigateToSection(item.id)} className="nav__link">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav__about-btn-wrapper">
            <Button
              onClick={() => {
                closeNav();
                navigate('/about');
              }}
              type={BtnType.SECONDARY}
            >
              Про фонд
            </Button>
          </div>
        </div>

        <div className="nav__section">
          <button className="nav__btn" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
