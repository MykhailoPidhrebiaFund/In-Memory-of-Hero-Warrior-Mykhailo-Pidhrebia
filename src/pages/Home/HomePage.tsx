import type React from 'react';
import { Header } from './components/Header';
import { Childhood } from './components/Childhood';
import { Studentship } from './components/Studentship';
import { Army } from './components/Army';
import { War } from './components/War';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Childhood />
      <Studentship />
      <Army />
      <War />
    </div>
  );
};

export default HomePage;
